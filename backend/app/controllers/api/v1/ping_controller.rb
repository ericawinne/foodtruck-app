class Api::V1::PingController < ApplicationController
  def index
    render json: { message: "Rails API is alive & well 🛻🔥" }
  end
end
