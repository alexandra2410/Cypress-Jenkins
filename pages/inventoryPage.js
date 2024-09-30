class inventoryPage{
    element = {
        titleSpan: () => cy.get('.product_label')
    }

}module.exports = new inventoryPage();