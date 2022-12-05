Rails.application.routes.draw do
  resources :reviews
  resources :options
  resources :categories
  resources :users
  resources :sessions
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/me', to: "users#show"
  get '/categories', to: 'categories#index'
  post '/register', to: "users#register"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  patch '/AccountUpdate', to: 'users#update'
end
