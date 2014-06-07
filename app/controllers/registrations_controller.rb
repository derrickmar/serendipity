class RegistrationsController < Devise::RegistrationsController


	def create
		build_resource(sign_up_params)

		resource_saved = resource.save
		yield resource if block_given?
		if resource_saved
			if resource.active_for_authentication?
				set_flash_message :notice, :signed_up if is_flashing_format?
				sign_up(resource_name, resource)
				respond_with resource, location: after_sign_up_path_for(resource)
			else
				set_flash_message :notice, :"signed_up_but_#{resource.inactive_message}" if is_flashing_format?
				expire_data_after_sign_in!
				respond_with resource, location: after_inactive_sign_up_path_for(resource)
			end
		else
			clean_up_passwords resource
			messages = resource.errors.full_messages.map { |msg| "<li>#{msg}</li>" }.join
			sentence = "We cannot create your account because of " + ActionController::Base.helpers.pluralize(resource.errors.count, "error")

			html = <<-HTML
			<div>
				<h5>#{sentence}</h5>
				<ul>#{messages}</ul>
			</div>
			HTML
			redirect_to root_path(error_message: html.html_safe)
		end
	end

	protected

	def after_update_path_for(resource)
		edit_user_registration_path
	end

	# def after_inactive_sign_up_path_for(resource)
	# 	edit_user_registration_path
	# end

end
