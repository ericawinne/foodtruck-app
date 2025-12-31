require "test_helper"

class Api::V1::PingControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_ping_index_url
    assert_response :success
  end
end
