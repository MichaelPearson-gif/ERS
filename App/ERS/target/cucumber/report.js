$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "testing the reimbursment page.",
  "description": "",
  "id": "testing-the-reimbursment-page.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1948275701,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "we go to the webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "TestStep.we_go_to_the_webpage()"
});
formatter.result({
  "duration": 448850799,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "We create a reimbursment request",
  "description": "",
  "id": "testing-the-reimbursment-page.;we-create-a-reimbursment-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I enter \"Robert\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"p\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click login",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click the reimbursment form",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter in \"3\" as amount",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter in \"description\" as description",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click submit form",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the reimbursment will be submitted",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Robert",
      "offset": 9
    }
  ],
  "location": "TestStep.i_enter_as_username(String)"
});
formatter.result({
  "duration": 157345400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "p",
      "offset": 9
    }
  ],
  "location": "TestStep.i_enter_as_password(String)"
});
formatter.result({
  "duration": 95538600,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.i_click_login()"
});
formatter.result({
  "duration": 73851801,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.i_click_the_reimbursment_form()"
});
formatter.result({
  "duration": 1164059400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "TestStep.i_enter_in_as_amount(String)"
});
formatter.result({
  "duration": 114662600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    }
  ],
  "location": "TestStep.i_enter_in_as_description(String)"
});
formatter.result({
  "duration": 135611500,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.i_click_submit_form()"
});
formatter.result({
  "duration": 68131100,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.the_reimbursment_will_be_submitted()"
});
formatter.result({
  "duration": 3036134200,
  "status": "passed"
});
formatter.after({
  "duration": 746717700,
  "status": "passed"
});
formatter.before({
  "duration": 1346998800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "we go to the webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "TestStep.we_go_to_the_webpage()"
});
formatter.result({
  "duration": 266760100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "We delete a reimbursment",
  "description": "",
  "id": "testing-the-reimbursment-page.;we-delete-a-reimbursment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I enter \"Robert\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"p\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click login",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click view past reimbursments",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click the delete button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the reimbursment will be deleted",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Robert",
      "offset": 9
    }
  ],
  "location": "TestStep.i_enter_as_username(String)"
});
formatter.result({
  "duration": 114461900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "p",
      "offset": 9
    }
  ],
  "location": "TestStep.i_enter_as_password(String)"
});
formatter.result({
  "duration": 80260200,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.i_click_login()"
});
formatter.result({
  "duration": 68197701,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.i_click_view_past_reimbursments()"
});
formatter.result({
  "duration": 1192839801,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.i_click_the_delete_button()"
});
formatter.result({
  "duration": 1069614900,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.the_reimbursment_will_be_deleted()"
});
formatter.result({
  "duration": 3017873400,
  "status": "passed"
});
formatter.after({
  "duration": 741579100,
  "status": "passed"
});
formatter.before({
  "duration": 1236659200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "we go to the webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "TestStep.we_go_to_the_webpage()"
});
formatter.result({
  "duration": 266364500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "view a reimbursment request",
  "description": "",
  "id": "testing-the-reimbursment-page.;view-a-reimbursment-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I enter \"Ronda\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter \"password\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click login",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click view all reimbursment",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click on a reimbursment",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I can view all the reimbursment information",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ronda",
      "offset": 9
    }
  ],
  "location": "TestStep.i_enter_as_username(String)"
});
formatter.result({
  "duration": 108251000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    }
  ],
  "location": "TestStep.i_enter_as_password(String)"
});
formatter.result({
  "duration": 93498901,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.i_click_login()"
});
formatter.result({
  "duration": 62973200,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.i_click_view_all_reimbursment()"
});
formatter.result({
  "duration": 3299759599,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.i_click_on_a_reimbursment()"
});
formatter.result({
  "duration": 3051346199,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.i_can_view_all_the_reimbursment_information()"
});
formatter.result({
  "duration": 1032728800,
  "status": "passed"
});
formatter.after({
  "duration": 685825900,
  "status": "passed"
});
formatter.before({
  "duration": 1300003101,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "we go to the webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "TestStep.we_go_to_the_webpage()"
});
formatter.result({
  "duration": 272308401,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "update a reimbursment request",
  "description": "",
  "id": "testing-the-reimbursment-page.;update-a-reimbursment-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I enter \"Ronda\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter \"password\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click login",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click view all reimbursment",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click on a reimbursment",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I approve a reimbursment request",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the reimbursment request will no longer be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ronda",
      "offset": 9
    }
  ],
  "location": "TestStep.i_enter_as_username(String)"
});
formatter.result({
  "duration": 115615500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    }
  ],
  "location": "TestStep.i_enter_as_password(String)"
});
formatter.result({
  "duration": 87406101,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.i_click_login()"
});
formatter.result({
  "duration": 75236200,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.i_click_view_all_reimbursment()"
});
formatter.result({
  "duration": 3279243900,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.i_click_on_a_reimbursment()"
});
formatter.result({
  "duration": 3051362201,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.i_approve_a_reimbursment_request()"
});
formatter.result({
  "duration": 45242501,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.the_reimbursment_request_will_no_longer_be_shown()"
});
formatter.result({
  "duration": 3021158900,
  "status": "passed"
});
formatter.after({
  "duration": 677290499,
  "status": "passed"
});
});