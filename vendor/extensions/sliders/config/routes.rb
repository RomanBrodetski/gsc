Refinery::Core::Engine.routes.draw do

  # Frontend routes
  namespace :sliders do
    resources :sliders, :path => '', :only => [:index, :show]
  end

  # Admin routes
  namespace :sliders, :path => '' do
    namespace :admin, :path => Refinery::Core.backend_route do
      resources :sliders, :except => :show do
        collection do
          post :update_positions
        end
      end
    end
  end

end
