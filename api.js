function getBored (){
    axios.get('https://www.boredapi.com/api/activity')
         .then(res => showInpage(res))
         .catch(err => console.error(err))
}
function getBoredInfo () {
    axios.get('https://www.boredapi.com/api/activity')
         .then(res => showInpage(res),
                      showInfo(res))
         .catch(err => console.error(err))
}



function showInpage(res) {
    document.getElementById('res').innerHTML = `
    <div class="card mt-3">

      <div class="card-body">
      <h2>${res.data.activity}</h2>
      <br>
      <pre> Key: ${res.data.key}</pre>
      <pre> Type: ${res.data.type}</pre>
      <pre> ${res.data.participants} people needed</pre>
    
      </div>
    </div>
  `;
  }


function showInfo(res) {
    document.getElementById('moreInfo').innerHTML = ` 
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>

    <div class="card mt-3">
    <div class="card-header">
    Config
    </div>
    <div class="card-body">
    <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
    </div>
    `
}


// Event listeners
document.getElementById('get').addEventListener('click', getBored);
document.getElementById('resInfo').addEventListener('click', getBoredInfo)


