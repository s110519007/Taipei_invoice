;(function () {
  const serialNumber = '--序號--'
  const scratchcardPos = document.querySelector('#scratchcardPos')
  const scratchcard = document.querySelector('#scratchcard')

  scratchcardPos.style.background = 'url("") center center no-repeat'
  scratchcard.style.width = '496px'
  scratchcard.style.height = '287px'
  scratchcard.style.position = 'absolute'
  scratchcard.style.top = '50%'
  scratchcard.style.left = '50%'
  scratchcard.style.transform = 'translate(-50%, -50%)'

  function sizeInit(num) {
    const w = 496 * num
    const h = 287 * num

    scratchcard.style.width = `${w}px`
    scratchcard.style.height = `${h}px`
    scratchcard.style.position = 'absolute'
    scratchcard.style.top = '50%'
    scratchcard.style.left = '50%'
    scratchcard.style.transform = 'translate(-50%, -50%)'
  }

  const winW = window.innerWidth
  if (winW <= 1024) {
    sizeInit(0.8)
  }
  if (winW <= 420) {
    sizeInit(0.6)
  }

  window.addEventListener('resize', () => {
    const winW = window.innerWidth
    if (winW > 1024) {
      const w = 496 * 1
      const h = 287 * 1
      sizeInit(1)
      app.renderer.resize(w, h)
      return
    } else if (winW > 420) {
      const w = 496 * 0.8
      const h = 287 * 0.8
      sizeInit(0.8)
      app.renderer.resize(w, h)
      return
    } else {
      const w = 496 * 0.6
      const h = 287 * 0.6
      sizeInit(0.6)
      app.renderer.resize(w, h)
      return
    }
  })

  const app = new PIXI.Application({
    transparent: true,
    resizeTo: scratchcard
  })
  scratchcard.appendChild(app.view)
  const {stage} = app

  const brush = new PIXI.Graphics()
  brush.beginFill(0xffffff)
  brush.drawCircle(0, 0, 30)
  brush.endFill()

  app.loader.add('t1', './images/scratchcard/scratchcard_cover.png')
  app.loader.add('t2', './images/scratchcard/scratchcard_bg.png')
  app.loader.load(setup)

  function setup(loader, resources) {
    window.addEventListener('resize', () => {
      const winW = window.innerWidth

      if (winW > 1024) {
        resizeFn(1, 46)
        return
      } else if (winW > 420) {
        resizeFn(0.8, 32)
        return
      } else {
        resizeFn(0.6, 24)
        return
      }
    })

    function resizeFn(num, fontSize) {
      const w = 496 * num
      const h = 287 * num

      background.width = w
      background.height = h
      imageToReveal.width = w
      imageToReveal.height = h
      sn.x = w * 0.5
      sn.y = h * 0.5
      sn.style.fontSize = fontSize
    }

    const background = new PIXI.Sprite(resources.t1.texture)
    stage.addChild(background)
    background.width = app.screen.width
    background.height = app.screen.height

    const imageToReveal = new PIXI.Sprite(resources.t2.texture)
    stage.addChild(imageToReveal)
    imageToReveal.width = app.screen.width
    imageToReveal.height = app.screen.height

    const renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height)

    const sn = new PIXI.Text(serialNumber, {fontSize: 46, fill: '#007bbb'})
    sn.anchor.set(0.5)
    sn.x = app.screen.width * 0.5
    sn.y = app.screen.height * 0.5
    stage.addChild(sn)

    const winW = window.innerWidth
    if (winW <= 768) {
      sn.style.fontSize = 32
    }
    if (winW <= 420) {
      sn.style.fontSize = 24
    }

    const renderTextureSprite = new PIXI.Sprite(renderTexture)
    stage.addChild(renderTextureSprite)
    sn.mask = renderTextureSprite
    imageToReveal.mask = renderTextureSprite

    app.stage.interactive = true
    app.stage.on('pointerdown', pointerDown)
    app.stage.on('pointerup', pointerUp)
    app.stage.on('pointermove', pointerMove)

    let dragging = false

    function pointerMove(e) {
      if (dragging) {
        brush.position.copyFrom(e.data.global)
        app.renderer.render(brush, renderTexture, false, null, false)
      }
    }

    function pointerDown(e) {
      dragging = true
      pointerMove(e)
    }

    function pointerUp() {
      dragging = false
    }
  }
})()
