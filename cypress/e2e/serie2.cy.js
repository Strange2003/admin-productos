describe("Serie2", () => {
    it("Inicio de sesion y verificar que el pane de admin se muestra", () => {
      cy.visit("http://localhost:3000/")
      cy.get('#usuario').type('admin')
      cy.get('#clave').type('1234')
      cy.get('#btn-login').click()
      cy.get('.contenido > :nth-child(2)').should('be.visible')
    })

    it.only("Agregar producto y que aparezca en la tabla", () => {
        cy.visit("http://localhost:3000/")
        cy.get('#usuario').type('admin')
        cy.get('#clave').type('1234')
        cy.get('#btn-login').click()
        const randomString = Math.random().toString(36).substring(2, 15)
        cy.get('#nombre').type(randomString)
        const randomNumber = Math.floor(Math.random() * 1000)
        cy.get('#precio').type(randomNumber)
        const randomNumber2 = Math.floor(Math.random() * 1000)
        cy.get('#stock').type(randomNumber2)
        cy.get('#btn-guardar').click()
      })

    it("Comprobar la validacion", () => {
        cy.visit("http://localhost:3000/")
        cy.get('#usuario').type('admin')
        cy.get('#clave').type('1234')
        cy.get('#btn-login').click()
        const randomString = Math.random().toString(36).substring(2, 15)
        cy.get('#nombre').type(randomString)
        cy.get('#precio').type('0')
        const randomNumber2 = Math.floor(Math.random() * 1000)
        cy.get('#stock').type(randomNumber2)
        cy.get('#btn-guardar').click()
        cy.get('#form-msg').should('contain', 'El precio debe ser un numero mayor que 0.')
    })
  })
  