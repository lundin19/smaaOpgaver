 const URL = 'https://api.mediehuset.net/sdg/goals';

    let home = document.getElementById("Home");
    home.onclick = () => {
        fetchData(URL);
    }

    let wrapper = document.getElementById("wrapper");

    let myData = fetchData(URL);    
    function fetchData(apiUrl) {
        fetch(apiUrl)
        .then((res) => {  return res.json();  })
        .then((data) => {  whatToDo(data.items);  });
    }    

    function fetchSpecific(url) {
        fetch(url)
        .then((res) => {  return res.json();  })
        .then((data) => {  specificTarget(data.item.targets);  })
    }

    function specificTarget(items) {
        wrapper.innerHTML = "";
        for (const item of items) {
            let paragraph = document.createElement("p");
            paragraph.innerHTML = item.description;
            wrapper.appendChild(paragraph);
        }
    }

    function whatToDo(items) {
        wrapper.innerHTML = "";
        for (const item of items) {
        let icon = document.createElement("svg");
        icon.classList.add("icon");
        icon.innerHTML = item.icon;
        wrapper.appendChild(icon);

        let anchor = document.createElement("a");
        anchor.classList.add("link");
        anchor.innerHTML = item.title;
        anchor.onclick = () => {
            fetchSpecific(item.request.url);
        }            

        icon.appendChild(anchor);

        
        }
    }