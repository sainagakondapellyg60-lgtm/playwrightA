const ExcelJs = require('exceljs');
let rowN;
let columnN;
async function readExcel() {
   const workbook = new ExcelJs.Workbook();
   await workbook.xlsx.readFile("C:\\Users\\Sainaga.Kondapelly\\Downloads\\download.xlsx");
   const worksheet = workbook.getWorksheet('Sheet1');
   worksheet.eachRow((row, rownumber) => {
      row.eachCell((cell, columnnumber) => {
         if (cell.value == 'Apple') {
            console.log(`Row ${rownumber}, Column ${columnnumber}: ${cell.value}`);
            rowN = rownumber;
            columnN = columnnumber;
         }
      })
   })

   worksheet.getCell(rowN, columnN).value = 'Sainaga';
   await workbook.xlsx.writeFile("C:\\Users\\Sainaga.Kondapelly\\Downloads\\download.xlsx");
}
readExcel();


