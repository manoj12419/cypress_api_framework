/// <reference types="Cypress" />
describe("Iterate over elements", () => {

    it("Invoke1", () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href*='product/category&path']").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });


    it("Validate product thumbnail", () => {
        cy.visit('https://www.automationteststore.com/')

        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', '16')
        //cy.get('@productThumbnail').eq(0).click()
        cy.get('@productThumbnail')
            .find('.productcart')
            .invoke('attr', 'title')
            .should('include', 'Add to Cart')


    });

    it.only("Add specific product to the basket", () => {
        cy.visit('https://www.automationteststore.com/')
        //cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('.thumbnail').as('productThumbnail')

        cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
            cy.log($el.text());
        });
    });

    it("Split string;Calculate total of normal and sale product", () => {
        cy.visit('https://www.automationteststore.com/')
        //cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('.thumbnail').as('productThumbnail')

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')

        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemPrice = $linkText.split('$');
            var itemPriceTotal = 0;
            var i;
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemPriceTotal += Number(itemPrice[i])
            }
            itemsTotal+= itemPriceTotal;
            cy.log("Non sale price items total: " + itemPriceTotal)

        })
       
        cy.get('@saleItemPrice').then($linkText => {
            var totalSaleItemPrice=0
           var saleitemPrice=$linkText.split('$');
           var i;
            for (i = 0; i < saleitemPrice.length; i++) {
                cy.log(saleitemPrice[i])
                totalSaleItemPrice += Number(saleitemPrice[i])
            }
            itemsTotal+=totalSaleItemPrice
            cy.log(" sale price items total: " + totalSaleItemPrice)
        })
        
        .then(()=>{
            cy.log("The total price of all products :"+itemsTotal)
            expect(itemsTotal).to.equal(674.5)
        })

    });


})