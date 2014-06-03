require 'spec_helper'

describe "StaticPages" do
	describe "GET /static_pages" do
		it "works! (now write some real specs)" do
      	# Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      	get root_path
      	response.status.should be(200)
      end
  end

  describe "click on logo" do
  	it "goes to root path" do
  		visit root_path
  		find("#logo").click #find element wiht logo and click
  		current_url.should == root_url
  	end
  end
end