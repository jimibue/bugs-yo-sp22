# AS A GROUP

- create rails app
- create react app
- add third party libs (axios, react-router-dom, faker, pry etc)
gemfile
```ruby
group :development do
  gem "pry"
  gem "better_errors"
  gem "binding_of_caller"
  gem 'faker', :git => 'https://github.com/faker-ruby/faker.git', :branch => 'master'
end
```
  > RAILS: anytime you add to your gem file you need to run `bundle`
  > REACT: **in your client folder**
  ```
  $ yarn add axios
  $ yarn add react-router-dom@6
  ```

  - add to github
