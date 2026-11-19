Feature: Ecommerce validations

    @Validation
    Scenario Outline: Placing the Order
        Given a login to Ecommerce2 application with "<username>" and "<password>"
        Then Verify Error messgae is displayed

        Examples:
            | username             | password    |
            | mangesh013@gmail.com | Mangesh@123 |
            | mangesh0132@gmail.com | Mangesh@123 |
          
