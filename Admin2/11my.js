const arr = [];

//perform in op
const addData = () => {
    let allData = JSON.parse(localStorage.getItem("CatInfo"));

    const name = document.catfrm.catname.value;
    const catid = document.catfrm.catid.value;

    const catData = {
        id: catid,
        name: name
    };

    if (catid != '') {
        // Update
        allData.map((i) => {
            if (i.id == catid) {
                i.name = name;
            }

        });

        localStorage.setItem("CatInfo", JSON.stringify(allData));
    } else {
        // Insert
        if (allData = null) {
            catData = {
                id: allData.length + 1,
                name: name
            }
            arr = allData;
        } else {
            //new arr push
            catData = {
                id: 1,
                name: name
            }
        }
        arr.push(catData);
        localStorage.setItem("CatInfo", JSON.stringify(arr));
    }

    // Clear form inputs
    document.catfrm.catname.value = '';
    document.catfrm.catid.value = '';

    // Call dispCat function
    dispCat();
}



// Display category
const dispCat = () => {
    //  allCatData
    let tr = '';

    let allData = JSON.parse(localStorage.getItem("CatInfo"));
    if (allData != null) {
        allData.map((i) => {
            tr += `<tr>
                     <td>${i.id}</td> 
                     <td> ${i.catname} </td> 
                     
                     
                      <td><a href ="#" class="btn btn-danger" onclick="delData(${i.id})">Delete</a></td>
                    
            </tr>`;

        })

        document.getElementById("allCatData").innerHTML = tr;

    }

}



//delete
const delData = (id) => {

    let allData = JSON.parse(localStorage.getItem('CatInfo'));
    allData.splice(id - 1, 1)
    j = 1;
    allData.map((i) => {

        i.id = j++;;
    })
    localStorage.setItem('CatInfo', JSON.stringify(allData))
    dispCat();


}

dispCat();




