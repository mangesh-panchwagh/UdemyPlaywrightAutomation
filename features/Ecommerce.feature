Feature: Ecommerce Validations

  Scenario: Placing the Order
    Given a login to Ecommerce application with "mangesh013@gmail.com" and "Mangesh@123" 
    When Add "ZARA COAT 3"
    Then Verify "ZARA COAT 3" is displayed in the cart
    When Enter valid details and Place the Order
    Then Verify Order is present in the OrderHistory
