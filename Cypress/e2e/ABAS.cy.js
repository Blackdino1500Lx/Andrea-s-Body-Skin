/*
testRunner: cypress.
Codigo test para Pagina Andrea Body and Skin.
Author: S!XGroup.
version:1.0.
year:2025.
*/

describe('Pruebas Generales de la página', () => {
  beforeEach(() => {
    cy.visit('https://blackdino1500lx.github.io/Andrea-s-Body-Skin');
    cy.wait(2000);
  });

  it('Prueba de links de navegación y redireccionamiento de logo', () => {
    cy.get('a.logo').should('be.visible').click();

    cy.get('a').contains('Inicio').should('exist').click();
    cy.url().should('include', 'index.html');

    cy.get('a').contains('Servicios').should('exist');
    cy.get('a').contains('Inicio').click();
    cy.get('a').contains('Productos').should('exist');
    cy.get('a').contains('Inicio').click();
    cy.get('a').contains('Nosotros').should('exist');
    cy.get('a').contains('Inicio').click();
    cy.get('a').contains('Contacto').should('exist');
    cy.get('a').contains('Inicio').click();

    cy.screenshot('navegacion-logo');
  });

  it('Prueba de Imágenes Página Inicio', () => {
    cy.get('div.hero').should('be.visible');
    cy.get('div.about-image').should('be.visible');
    cy.get('div.service-icon').should('be.visible');
    cy.get('div.product-card').should('be.visible');

    cy.screenshot('imagenes-inicio');
  });

  it('Prueba de Página Servicios', () => {
    cy.get('a').contains('Servicios').click();
    cy.get('h2').contains('Belleza en Cada Detalle').should('exist');
    cy.get('section.banner-servicios').should('be.visible');
    cy.get('section.banner-servicios p').should('exist');

    cy.screenshot('pagina-servicios');
  });

  it('Pruebas de Página Productos', () => {
    cy.get('a').contains('Productos').click();
    cy.get('div.hero-content').contains('Productos que cuidan tu piel como te lo mereces').should('exist');
    cy.get('div.hero').should('be.visible');
    cy.get('section.products').should('exist');
    cy.get('div.product-grid').should('be.visible');
    cy.get('div.product-card').find('img').should('exist');

    cy.screenshot('pagina-productos');
  });

  it('Prueba Página Nosotros', () => {
    cy.get('a').contains('Nosotros').click();
    cy.get('h2').contains('Cuidamos tu piel con pasión y experiencia').should('exist');
    cy.get('section.dual-section').should('be.visible');
    cy.get('section.about').should('be.visible');
    cy.get('section.contact').should('be.visible');
    cy.get('section.services').should('be.visible');

    cy.screenshot('pagina-nosotros');
  });

  it('Prueba Página Contacto', () => {
    cy.get('a').contains('Contacto').click();
    cy.get('h2').contains('Estamos aquí para ti').should('exist');
    cy.get('section.contact').should('be.visible');
    cy.get('section.services').should('be.visible');

    cy.screenshot('pagina-contacto');
  });
});

describe('Responsive modal test', () => {
  const viewports = [[360, 640], [768, 1024], [1920, 1080]];

  viewports.forEach(([width, height]) => {
    it(`debería mostrar el modal correctamente en ${width}x${height}`, () => {
      cy.viewport(width, height);
      cy.visit('https://blackdino1500lx.github.io/Andrea-s-Body-Skin/productos.html');
      cy.get('.product-card').first().find('.view-more').click();
      cy.get('div.modal').should('be.visible');
      cy.get('#modal-beneficios').should('exist');

      cy.screenshot(`modal-responsive-${width}x${height}`);
    });
  });
});