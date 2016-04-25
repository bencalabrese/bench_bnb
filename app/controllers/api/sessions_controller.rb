class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)

    if @user
      login!(@user)
      render :show
    else
      render json: ["Invalid Credentials"]
    end
  end

  def destroy
    @user = current_user
    logout!
    render :show
  end
end
