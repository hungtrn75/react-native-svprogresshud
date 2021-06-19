# react-native-svprogresshud.podspec

require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-svprogresshud"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  react-native-svprogresshud
                   DESC
  s.homepage     = "https://github.com/hungtrn75/react-native-svprogresshud"
  # brief license entry:
  s.license      = "MIT"
  # optional - use expanded license entry instead:
  s.license    = { :type => "MIT", :file => "LICENSE" }
  s.authors      = { "Hung Tran" => "hungtrn75@email.com" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/hungtrn75/react-native-svprogresshud.git", :tag => "#{s.version}" }

  s.source_files = 'ios/Classes/**/*'
  s.public_header_files = 'ios/Classes/**/*.h'
  s.requires_arc = true

  s.default_subspec = 'SVProgressHUD_Core'
  s.subspec 'SVProgressHUD_Core' do |core|
    core.source_files = 'ios/SVProgressHUD/*.{h,m}'
    core.resources = 'ios/SVProgressHUD/SVProgressHUD.bundle'
  end

  s.dependency "React"
end

