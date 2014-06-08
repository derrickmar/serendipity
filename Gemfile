source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.0'
# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
gem 'jquery-turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]


gem "bootstrap-sass" # for bootstrap css
gem 'faker' #generate fake names
gem 'annotate' #provides attribute annotation on model files
gem 'sprockets' # allows for loading js files
# formats things nicely on rails console
gem 'hirb'
# helps understand embedded ruby for better tabbing on sublime
gem 'htmlbeautifier'
# for file attachment
gem "paperclip"
# for file storage on aws
gem 'aws-sdk'
# for sitemap generation
gem 'sitemap_generator'
# allows you to use jquery-ui library
gem 'jquery-ui-rails'
# for environmental variables (hide from git)
gem 'figaro'
gem 'thor'
gem 'devise'


group :development, :test do
  # This includes rspec-rails in a development environment so that we have
  # access to RSpec-specific generators, and it includes it in test mode in order to
  # run the tests.
  gem 'rspec-rails'
  # advanced setup gems to speed up testing with spork server and guard
  # gem 'guard-rspec', '2.5.0'
  # gem 'spork-rails', '4.0.0'
  # gem 'guard-spork', '1.5.0'
  # simple solution to managing child prcesses 
  gem 'childprocess'
end

group :test do
  # capybara dependecy
  gem 'selenium-webdriver'
  # allows us to simulate a user’s interaction with the
  # sample application using a natural English-like syntax
  gem 'capybara'
  # helps us create objects
  gem 'factory_girl_rails'
  # optional: let's us test using cucumber syntax (more like English)
  gem 'cucumber-rails', :require => false
  # cucumber dependecy
  gem 'database_cleaner'
end

group :production do
  # Used by Heroku to serve static assets such as images and stylesheets.
  gem 'rails_12factor'
end
