class JoinersController < ApplicationController

    def index
        joiners = Joiner.all

        render json: joiners
    end

    def show
        joiner = joiner.find(params[:id])

        render json: joiner
    end
    
end