class CategoriesController < ApplicationController

    def index
        category = Category.all
        render json: category, only: [:id, :event], status: :ok
    end
end
