# Technical Debt

## Hotel booking logic

The field `isBooked` in hotelRoom schema is incorrect for real hotel systems.

Availability must be calculated based on booking date ranges.

TODO:
- remove `isBooked` from queries
- remove `updateHotelRoom()` from webhook
- implement date-based availability check