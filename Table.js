

class Table{
    constructor(arr){
        this.header = arr[0];
        arr.shift();
        this.rows = arr;
    }

    // Calculando a quantidade de linhas existentes na tabela.
    get RowCount(){
        return this.rows.length
    }
    // Calculando a quantidade de colunas existentes na tabela.
    get ColumnCount(){
        return this.header.length;
    }
}

module.exports = Table;