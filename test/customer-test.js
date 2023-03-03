import { expect } from 'chai';
import customerSampleData from '../src/classes/customerSampleData';
import Customer from '../src/classes/customer';




describe('Customer', () => {
  let customer;
 
beforeEach(() => {
  customer = new Customer({
    
      id: 10,
      name: "Taylor Jordan",
      customer: customerSampleData
  });
});



  it('should be a function', () => {
      expect(Customer).to.be.a('function');
  })

  it('should be an instance of customer', () => {
      expect(customer).to.be.an.instanceof(Customer);
  })
  it('should have an id', () => {
    customerSampleData.forEach(customer => {
      expect(customer).to.have.property('id');
    });
  });

  // it('should have an image', () => {
  //   const result = recipe.getIngredientsName('Test Recipe');
  //     expect(recipe.image).to.deep.equal('https://spoonacular.com/recipeImages/1001-556x370.jpg');
  // })

  // it('should get ingredients by name', () => {
  //   const result = recipe.getIngredientsName('whipped cream');
    
  //   expect(result).to.deep.equal([{id: 93672, name: "whipped cream", estimatedCostInCents: 312, image: "https://spoonacular.com/recipeImages/799732-556x370.jpg", instruction:"Transfer the shrimp to a large bowl and toss with the mayo mixture.In a separate bowl, add the cabbage and lettuce. Toss with the olive oil, vinegar and honey until well coated. Toss the cilantro in. To serve the shrimp, mix with the slaw and garnish the entire thing with chives. Enjoy!", number: 4, quantity: { amount: 2, unit: "cups"}}
  //   ]);
  // });

  // it('should calculate the total cost of ingredients', () => {
  //   const ingredients = [
  //     { id: 20081, quantity: { amount: 2, unit: "cups"} },
  //     { id: 18372, quantity: { amount: 4, unit: "cups"} },
  //     { id: 18376, quantity: { amount: 3, unit: "tsp"} },
  //     { id: 93672, quantity: { amount: 2, unit: "tsp"} }
  //   ];
  //   const ingredientsData = [
  //     { id: 20081, estimatedCostInCents: 168 },
  //     { id: 18372, estimatedCostInCents: 582 },
  //     { id: 18376, estimatedCostInCents: 712 },
  //     { id: 93672, estimatedCostInCents: 312 }
  //   ];
  //   const expectedResult = '$53.72';

  //   const result = recipe.calculateIngredientsCosts(ingredientsData, ingredients);

  //   expect(result).to.equal(expectedResult);
  // });

});

