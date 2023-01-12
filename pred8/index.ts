type Result = "pass" | "fail"
 
function verify(result: Result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}

type ResponseFromApi = {
    data: Data 
}

type Data = {
    ime: String,
    description: String
}

async () :Promise<ResponseFromApi>  => {
    let resp= await fetch("fjkbhjkfdhjkfd");
    let data = await resp.json();

    return data as ResponseFromApi;
}

let zzz = ["sdjkjghjkfdsghf"];
zzz.forEach(()=>{})