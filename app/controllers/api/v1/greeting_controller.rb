# Api
module Api
  module V1
    class GreetingController < Api::V1::ApplicationController
      def index
        @greeting = Greeting.all.shuffle

        render json: @greeting
      end
    end
  end
end
