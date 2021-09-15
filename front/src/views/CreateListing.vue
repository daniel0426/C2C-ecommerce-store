<template>
  <div class="w-full m-auto">
      <form action="" class="w-7/12 m-auto mt-12 box-border p-4 flex flex-col">
      <h1 class="text-bright-purple text-3xl self-center mb-12">Create Listings</h1>
        <div class="flex">
          <div class="item-image flex-1 p-4 mt-4">
            <input type="file" accept="image/*" class="h-2/3 w-2/3 border-2 m-4" required>
          </div>
          <div class="item-info flex-1 flex flex-col p-4">
            <div class="form-group my-2 " >
              <label for="" >Listing Title</label>
              <input type="text" class="w-full mt-2 block py-1 px-4 border-2 outline-none border-light-purple rounded-lg text-gray-700 " required>
            </div>
            <div class="form-group my-2 ">
              <label for="" >Listing Price</label>
              <input type="text" class="w-full mt-2 block py-1 px-4 border-2 outline-none border-light-purple rounded-lg text-gray-700 " required>
            </div>
            <select name="" id="" class="my-2 w-full block py-2 px-4 border-2 outline-none border-light-purple rounded-lg text-gray-700 " required>
              <option selected disabled value="Listing Condition">Listing Condition</option>
              <option value="New">New</option>
              <option value="Like New">Like New</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Poor">Poor</option>
            </select>
             <div class="form-group my-4 ">
              <label for="">Item Size</label>
              <input type="text" class=" mt-2 w-full block py-1 px-4 border-2 outline-none border-light-purple rounded-lg text-gray-700 " required>
            </div>
            <select name="" id="" class="my-2 w-full block py-2 px-4 border-2 outline-none border-light-purple rounded-lg text-gray-700 " required>
                <option selected disabled value="Location">Location</option>
                <option value="Auckland">Auckland</option>
                <option value="Hamilton">Hamilton</option>
                <option value="Tauranga">Tauranga</option>
                <option value="Christchurch">Christchurch</option>
                <option value="Wellington">Wellington</option>
                <option value="Rotorua">Rotorua</option>
                <option value="Dunedin">Dunedin</option>
                <option value="Queenstown">Queenstown</option>
                <option value="New Plymouth">New Plymouth</option>
            </select>
            <select name="" id="" class="my-2 w-full block py-2 px-4 border-2 outline-none border-light-purple rounded-lg text-gray-700 " required>
                <option selected disabled value="Payment Type">Payment Type</option>
                <option value="Cash">Cash</option>
                <option value="Debit, Credit card">Debit, Credit card</option>
                <option value="Cash &amp; Card">Cash &amp; Card</option>
            </select>
            <select name="" id="" class="my-2 w-full block py-2 px-4 border-2 outline-none border-light-purple rounded-lg text-gray-700 " required>
              <option selected disabled value="Shipping Option">Shipping Option</option>
              <option value="NZ Post">NZ Post</option>
              <option value="NZ Couriers">NZ Couriers</option>
              <option value="Pick up">Pick up</option>
            </select>
          </div>
        </div>
        <div class="item-description p-4 ">
           <div class="form-group   flex flex-col">
              <label for="">Description</label>
              <textarea class="my-2 p-2 border-2 outline-none border-light-purple rounded-lg text-gray-700" cols="10" rows="5" placeholder="Please enter a description for this listing. Character limit of 500 characters applies." required>
              </textarea>
            </div>
        </div>
        <button  class="w-32 self-end mr-4  bg-bright-purple text-white text-lg p-2 rounded-md cursor-pointer  " >Create Listing</button>
      </form>
  </div>
</template>

<script>
export default {
  name: "CreateListing"
}
</script>

<style scoped>
input {
  cursor:pointer;
}
select {
  cursor:pointer;
}

</style>