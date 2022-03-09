Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    # nested routing
    resources :bugs do
      resources :treatments
    end
  end
end
