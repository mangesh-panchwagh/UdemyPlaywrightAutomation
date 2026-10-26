const ExcelJs = require('exceljs');
const {test,expect} = require('@playwright/test');

async function writeExcelTest(searchText,replaceText,change,filePath)
{
    
const workbook = new ExcelJs.Workbook();
await workbook.xlsx.readFile(filePath);
    //.then(function()  {  })
        const worksheet = workbook.getWorksheet("Sheet1");

    const output = await readExcel(worksheet,searchText);
  
    const cell = worksheet.getCell(output.row,output.column+change.colChange);
    cell.value = replaceText;
   await workbook.xlsx.writeFile(filePath);

}

async function readExcel(worksheet,searchText){
    let output = {row:-1,column:-1};
        worksheet.eachRow((row,rowNumber)=>
    {
         row.eachCell( (cell,colNumber)=>
        {       
            if(cell.value === searchText)
            {
                
                output.row = rowNumber;
                output.column = colNumber;
            }
        })
    })
    return output;
}

// update Mango price to 350
//writeExcelTest("Mango",350,{rowChange:0,colChange:2},"C:/Users/10851440/Downloads/excelTest.xlsx");

test('Upload downlaod excel validations', async({page})=>{

    const textSearch = "Mango";
    const updateValue = "350";
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");

    // 1. Start waiting for download BEFORE clicking Download
    const downloadPromise = page.waitForEvent('download');

    // 2. Click Download
    await page.getByRole("button", { name: 'Download' }).click();

    // 3. Wait for download
    const download = await downloadPromise;

    // 4. Save downloaded Excel to required location
    const filePath =
        "C:/Users/10851440/Downloads/download.xlsx";

    await download.saveAs(filePath);
     await page.pause();
 // 5. Change Mango price to 350
    writeExcelTest(textSearch,updateValue,{rowChange:0,colChange:2},"C:/Users/10851440/Downloads/download.xlsx");
    //await page.locator("#fileinput").click();
     // 6. Upload modified Excel
    await page.locator("#fileinput").setInputFiles(filePath);

    // assertion
    const textLocator = page.getByText(textSearch);
    const desiredRow = await page.getByRole("row").filter({has:textLocator});
    await expect(desiredRow.locator("#cell-4-undefined")).toContainText(updateValue);
    console.log(await desiredRow.locator("#cell-4-undefined").textContent());
});
