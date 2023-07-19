import React, { useEffect, useState } from "react";
let nameList = [];
let linkList = [];
let descriptionList = [];
function parseJson() {
  fetch(`./articles/tasks.json`,
    {
      header: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }
  )
    .then((response) => {
      return response.json()
    })
    .then((myjson) => {
      for (let index = 0; index < myjson.name.length; index++) {
        nameList.push(myjson.name[index]);
        linkList.push(myjson.link[index]);
        descriptionList.push(myjson.description[index]);
      }
    })
    .catch(err => {
      console.log("Error Reading data " + err);
    })
}
parseJson();
function Tasks() {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="cards">
      <h2 className="cards-heading">Раздел посвященный задачам:</h2>

      <div className="card-container">
        {console.log(nameList)}
        {nameList.map((i) =>
          <div className="card">

            <h3 className="card-heading">{i}</h3>
            <a className="card-link">{linkList[nameList.indexOf(i)]}</a>
            <p className="card-description">{descriptionList[nameList.indexOf(i)]}</p>

          </div>
        )}








      </div>

      <div className="new-card">
        <form id="formElem">
          <div>
            <label for="title">name</label><br />
            <input id="title" placeholder="enter title" />
          </div>

          <div>
            <label for="link">link</label><br />
            <input id="link" placeholder="enter link" />
          </div>

          <div className="form-description">
            <label for="description">description</label><br />
            <textarea name="description" id="description" cols="30" rows="4"></textarea>
          </div>

          <button className="add-card">Добавить карточку</button>
        </form>
      </div>

    </div>

  );
}
formElem.onsubmit = async (e) => {
  e.preventDefault();
  var form = document.querySelector("#formElem");
 // var form = document.forms[0];

    data = {
      firstname : form.querySelector('input[name="firstname"]').value,
      lastname : form.querySelector('input[name="lastname"]').value,
      age : 5
    }

    let response = await fetch('http://localhost:8482/decode', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
    })

    let text = await response.text(); // read response body as text
    document.querySelector("#decoded").innerHTML = text;
};

export default Tasks;