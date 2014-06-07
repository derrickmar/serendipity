class StaticPagesController < ApplicationController
  def home
  	puts params
  	if params[:error_message] != nil
  		puts "YAYAAYYAAY"
  		flash[:alert] = params[:error_message].html_safe
  	end
  end

  def contact
  end

  def faq
  end

  def tips
  end
end
