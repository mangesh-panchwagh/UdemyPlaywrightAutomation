Feature: Ecommerce Validations

@Regression
  Scenario: Placing the Order
    Given a login to Ecommerce application with "mangesh013@gmail.com" and "Mangesh@123" 
    When Add "ZARA COAT 3"
    Then Verify "ZARA COAT 3" is displayed in the cart
    When Enter valid details and Place the Order
    Then Verify Order is present in the OrderHistory

    @Validation
    Scenario Outline: Placing the Order
        Given a login to Ecommerce2 application with "<username>" and "<password>"
        Then Verify Error messgae is displayed

        Examples:
            | username             | password    |
            | mangesh013@gmail.com | Mangesh@123 |
            | mangesh0132@gmail.com | Mangesh@123 |