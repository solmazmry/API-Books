const searchBook = async()=>{
 const bookName =document.querySelector("#bookName").value 
 const baseUrl = `https://www.googleapis.com/books/v1/volumes/?q=${bookName}`
 try {
    const response= await axios.get(baseUrl)
     const data=response.data
     if(data.totalItems>0){
        const books= data.items 
        let resultHTML=''
        books.forEach(book => {
          const title =  book.volumeInfo.title
          const author= book.volumeInfo.authors?book.volumeInfo.authors.join(','):'yazar melum deyil'
          const description =book.volumeInfo.description|| 'aciqlama yoxdur'
          resultHTML+=`<p> <b>${title}<br
 </b>  
 muellif:${author}<br>
 aciqlama:${description}
 </p>`
 document.querySelector(".result").innerHTML=resultHTML
        });
     } else{
        document.querySelector(".result").innerHTML='kitab tapilmadi'
     }



 } catch (e) {
    document.querySelector(".result").innerText='xeta var'
 }
}


// request atirirq response aliriq 
// Conditional (ternary) operator ? :