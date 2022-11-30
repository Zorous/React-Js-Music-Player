import React, { useState } from "react";
import productsData from "../../Data/productsData.json";
import Details from "./Details";
import SearchProducts from "./SearchProducts";

// const DistinctCategories=(category)=>{
//   let Categories =[];
//   let DistinctCategories=[];
//   Categories.push(category);
// for(let i=0;i<Categories.length;i++){
//   if(Categories[i] == Categories[i+1]){
// DistinctCategories.push(Categories[i+1])
//   }
// }
// }

//______________________________________________________________________

// const result = [];
// const map = new Map();
// for (const item of array) {
//     if(!map.has(item.id)){
//         map.set(item.id, true);    // set any value to Map
//         result.push({
//             id: item.id,
//             name: item.name
//         });
//     }
// }


function Products() {
  const idmodaltarget = "#exampleModalCenter";
  const idmodal = "exampleModalCenter";
  
const [Category,setCategory]=useState("All");
// const [title,setTitle]=useState("");

const filterCat = (e) =>{
setCategory(e.target.value)
}

const SearchName = (e)=>{
return(
  e.target.value
)
}
  return (
    <>
    <div class="form-group">
      <label htmlFor="cat"><h2>Search by Category : </h2></label>&nbsp;
      <select className="form-select form-select-lg mb-3" name="cat" id="cat" onChange={filterCat}>
      {productsData.products.map((c)=>{
        return(
          
          <option value={c.category}>{c.category}</option>
          )
      }
    
      )
     
    
    }
        
      </select>
    </div>
    <br/><br/>
<SearchProducts data={productsData.products}/>

      <table class="table" style={{marginTop:"10%"}}>
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">title</th>
            <th scope="col">Image</th>
            <th scope="col">category</th>
            <th scope="col">Price</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {productsData.products.filter((p) => {
            
            // Category == "All"?theOne = productsData.products:theOne = filtredTable

           return (p.category == Category)}).map((p) =>
            {
            return (
              <>
                <tr>
                  <th scope="row">{p.id}</th>
                  <td>{p.title}</td>
                  <td>
                    <img src={p.thumbnail} height="80px" />
                  </td>
                  <td>{p.category}</td>
                  <td>{p.price} $</td>
                  <td>
                    <button
                      onClick=<Details id={p.id} data={productsData.products} />
                      class="btn btn-warning"
                      data-toggle="modal"
                      data-target={idmodaltarget + p.id}
                    >
                      View Details
                    </button>
                  </td>
                </tr>

                <div
                  className="modal fade"
                  id={idmodal + p.id}
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                  style={{ width: "1000px" }}
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <center>
                          <h3
                            className="modal-title"
                            id="exampleModalLongTitle"
                          >
                            {p.title}
                          </h3>
                        </center>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div
                          className="row"
                          id="bgmodal"
                          style={{
                            margin: "20px",
                            borderRadius: "7px",
                            content: "",
                            opacity: 0.8,
                            background: `rgb(26, 31, 41) url("${p.thumnail}") no-repeat fixed top`,
                            backgroundSize: "cover"
                          }}
                        >
                          {p.images.map((img) => {
                            return (
                              <div className="col col-md-4 col-lg-4">
                                <img
                                  src={img}
                                  height="200px"
                                  width="200px"
                                  style={{ margin: "15px" }}
                                  alt=""
                                />
                              </div>
                            );
                          })}
                        </div>
                        <br></br>
                        <div style={{ marginBottom: "200px", margin: "20px" }}>
                          <div
                            style={{
                              border: "1px solid black",
                              padding: "20px",
                              borderRadius: "7px",
                            }}
                          >
                            <h5>Description</h5>
                            <p>{p.description}</p>
                          </div>
                          <br></br>
                          <div className="row">
                            <div className="col col-mg-4 col-lg-4">
                              <p>
                                <b>Stock : </b>
                                {p.stock} pieces
                              </p>
                            </div>

                            <div className="col col-mg-4 col-lg-4">
                              <p>
                                <b>Brand : </b>
                                {p.brand}
                              </p>
                            </div>
                            <div className="col col-mg-4 col-lg-4">
                              <p>
                                <b>Rating : </b>
                                {p.rating} &nbsp;
                                <img
                                  src="https://img.icons8.com/emoji/48/null/star-emoji.png"
                                  height="24px"
                                />{" "}
                              </p>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div>
                            <button className="btn btn-sm btn-success">Purcharse</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }
          )
        }
        </tbody>
      </table>

    </>
  );
           
           
           
}

