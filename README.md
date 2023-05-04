Usage:

Add following code to you HTML file where you want to use multi select box
 <div class="row">
      <div class="col-md-10 offset-md-1">
        <table id="tabledata">
          <!-- HTML code for the search bar -->
          <tr>
            <th>Title</th>
            <th>data</th>
            <th>dropdown</th>
          </tr>
        </table>
      </div>
    </div>
<img scr="htmlimage.png">
<h3> In javascript file : </h3>

<p>import ztmultiselect from "../node_modules/ztmultiselectdropdown/Index.js";</p>

<code>
const categories = [
  {
    id: 1,
    name: "DmpTest6762NyKpsTestDataforDrp",
    Data: [
      {
        cId: 1,
        category: "ProductsTD455",
        items: [
          {
            itemId: 1,
            itemName: "4Mens Casual Premium Slim Fit T-Shirts",
            status: "checked",
          },
          { itemId: 2, itemName: "Mens Casual Slim Fit", status: "unchecked" },
          {
            itemId: 3,
            itemName: "Silver Dragon Station Chain Bracelet",
            status: "unchecked",
          },
          {
            itemId: 4,
            itemName: "Hafeez Center in the United States",
            status: "unchecked",
          },
          {
            itemId: 5,
            itemName: "White Gold Plated Princess",
            status: "unchecked",
          },
          {
            itemId: 6,
            itemName: "Classic Created Wedding Engagement",
            status: "unchecked",
          },
        ],
      },
      {
        cId: 2,
        category: "Books",
        items: [
          {
            itemId: 38,
            itemName: "The Great Gatsby by RDX",
            status: "unchecked",
          },
          {
            itemId: 48,
            itemName: "To Kill a Mockingbird lorem span",
            status: "checked",
          },
          { itemId: 32, itemName: "The Great Gatsby", status: "unchecked" },
          { itemId: 24, itemName: "To Kill a Mockingbird", status: "checked" },
          { itemId: 33, itemName: "The Great Gatsby", status: "unchecked" },
          { itemId: 46, itemName: "To Kill a Mockingbird", status: "checked" },
        ],
      },
      {
        cId: 3,
        category: "Trains",
        items: [
          {
            itemId: 73,
            itemName: "Rajdhani 34KNS24 Indore-Delhi",
            status: "checked",
          },
          {
            itemId: 94,
            itemName: "Vande Bahrat JAA33B1 Delhi-Katra",
            status: "checked",
          },
          {
            itemId: 56,
            itemName: "Turnto Superfast Express Mubai-Indore",
            status: "checked",
          },
          { itemId: 86, itemName: "Kamayani Indore-Mumbai", status: "checked" },
        ],
      },
    ],
  }
];

ztmultiselect(categories);
</code>