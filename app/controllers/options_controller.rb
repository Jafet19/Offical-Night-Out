class OptionsController < ApplicationController

    def index
        option = Option.all
        render json: option, only: [:id, :name, :location, :url],include: ['category'], status: :ok
    end

    def show
        option = Option.find(params[:id])
        render json: option, only: [:id, :name, :location, :url], status: :ok
    end

    def create
        option = Option.create!(option_params)
        render json: option, status: :created
    end

    def destroy
        option = Option.find(params[:id])
        option.destroy
        head :no_content
    end

    private

    def option_params
        params.permit(:name, :url, :location, :category_id)
    end

end
