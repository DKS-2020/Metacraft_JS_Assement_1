/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTContainer = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(rank, name, company, sales) {
    let NFT = {
        rank: rank,
        name: name,
        company: company,
        sales: sales,
    };
    NFTContainer.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
       console.log("\n\n_____________________ CARS SALES IN INDIA 2023 _________________________\n\n" );
    for (let i = 0; i < NFTContainer.length; i++) {
        console.log("Rank: "+NFTContainer[i].rank)
        console.log("Name: " + NFTContainer[i].name);
        console.log("Company: " + NFTContainer[i].company);
        console.log("Sales: " + NFTContainer[i].sales);
        console.log("\n")
    }
     console.log("\n\n____________________________________________\n\n" );
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs Minted till now: " + NFTContainer.length);
}

// call your functions below this line
mintNFT(1,"Swift", "Maruti Suzuki", 203469);
mintNFT(2,"WagonR", "Maruti Suzuki", 201302);
mintNFT(3,"Baleno", "Maruti Suzuki", 193988);
mintNFT(4,"Brezza", "Maruti Suzuki", 170588);
mintNFT(5,"Nexon", "Tata", 170311);
mintNFT(6,"Dzire", "Maruti Suzuki", 157522);
mintNFT(7,"Creta", "Hyundia", 150311);
mintNFT(8,"Punch", "Tata", 150182);

listNFTs();
getTotalSupply();
