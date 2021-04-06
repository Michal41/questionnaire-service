Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :questionnaires do
        resources :questions do
          resources :answers
        end
        put 'publish_questionnaire', to: 'questionnaires#publish'
      end
    end
  end
  root to:'homepage#index'
  get '/*path' => 'homepage#index'
end
