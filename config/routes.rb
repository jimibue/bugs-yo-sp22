Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    # nested routing

    # {bug: {bugData}, treatments: [treatments]}
    get 'all', to: 'bugs#all'
    get 'bugs_all/:id', to: 'bugs#bugs_all'
    get 'treatments',  to:'treatments#treatments_all'
    resources :bugs do
      resources :treatments

    end


  
  end
end
