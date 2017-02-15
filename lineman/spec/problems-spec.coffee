describe 'UI testing', -> 
  Given ->
    @$content = affix('.main')
  Given -> spyOn(JST, 'app/templates/problems.us').andReturn -> '<div>lol</div>'
  When -> window.createApplication()
  Then -> @$content.find('div').text() =='lol'
