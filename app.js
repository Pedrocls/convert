const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const Writer = require('./Writer')
const PDFWriter = require('./PDFWriter');

var leitor = new Reader();
var escritor = new Writer();

leitor.Read('./user.csv');

async function main(){
    const dados = await leitor.Read('./user.csv');
    var dadosProcessados = Processor.Process(dados)

    var users = new Table(dadosProcessados);
    
    var html = await HtmlParser.Parse(users);
   
    escritor.Write(Date.now() + ".html", html);
    PDFWriter.WritePDF(Date.now() + ".PDF", html)

}

main();