var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointSpring' )
  var i687 = data
  i686.spring = i687[0]
  i686.damper = i687[1]
  i686.targetPosition = i687[2]
  return i686
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointMotor' )
  var i689 = data
  i688.m_TargetVelocity = i689[0]
  i688.m_Force = i689[1]
  i688.m_FreeSpin = i689[2]
  return i688
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointLimits' )
  var i691 = data
  i690.m_Min = i691[0]
  i690.m_Max = i691[1]
  i690.m_Bounciness = i691[2]
  i690.m_BounceMinVelocity = i691[3]
  i690.m_ContactDistance = i691[4]
  i690.minBounce = i691[5]
  i690.maxBounce = i691[6]
  return i690
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointDrive' )
  var i693 = data
  i692.m_PositionSpring = i693[0]
  i692.m_PositionDamper = i693[1]
  i692.m_MaximumForce = i693[2]
  i692.m_UseAcceleration = i693[3]
  return i692
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i695 = data
  i694.m_Spring = i695[0]
  i694.m_Damper = i695[1]
  return i694
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i697 = data
  i696.m_Limit = i697[0]
  i696.m_Bounciness = i697[1]
  i696.m_ContactDistance = i697[2]
  return i696
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i699 = data
  i698.m_ExtremumSlip = i699[0]
  i698.m_ExtremumValue = i699[1]
  i698.m_AsymptoteSlip = i699[2]
  i698.m_AsymptoteValue = i699[3]
  i698.m_Stiffness = i699[4]
  return i698
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i701 = data
  i700.m_LowerAngle = i701[0]
  i700.m_UpperAngle = i701[1]
  return i700
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i703 = data
  i702.m_MotorSpeed = i703[0]
  i702.m_MaximumMotorTorque = i703[1]
  return i702
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i705 = data
  i704.m_DampingRatio = i705[0]
  i704.m_Frequency = i705[1]
  i704.m_Angle = i705[2]
  return i704
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i707 = data
  i706.m_LowerTranslation = i707[0]
  i706.m_UpperTranslation = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i709 = data
  i708.name = i709[0]
  i708.width = i709[1]
  i708.height = i709[2]
  i708.mipmapCount = i709[3]
  i708.anisoLevel = i709[4]
  i708.filterMode = i709[5]
  i708.hdr = !!i709[6]
  i708.format = i709[7]
  i708.wrapMode = i709[8]
  i708.alphaIsTransparency = !!i709[9]
  i708.alphaSource = i709[10]
  i708.graphicsFormat = i709[11]
  i708.sRGBTexture = !!i709[12]
  i708.desiredColorSpace = i709[13]
  i708.wrapU = i709[14]
  i708.wrapV = i709[15]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i710 = root || new pc.UnityMaterial()
  var i711 = data
  i710.name = i711[0]
  request.r(i711[1], i711[2], 0, i710, 'shader')
  i710.renderQueue = i711[3]
  i710.enableInstancing = !!i711[4]
  var i713 = i711[5]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i713[i + 0]) );
  }
  i710.floatParameters = i712
  var i715 = i711[6]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i715[i + 0]) );
  }
  i710.colorParameters = i714
  var i717 = i711[7]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i717[i + 0]) );
  }
  i710.vectorParameters = i716
  var i719 = i711[8]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i719[i + 0]) );
  }
  i710.textureParameters = i718
  var i721 = i711[9]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i721[i + 0]) );
  }
  i710.materialFlags = i720
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i725 = data
  i724.name = i725[0]
  i724.value = i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i729 = data
  i728.name = i729[0]
  i728.value = new pc.Color(i729[1], i729[2], i729[3], i729[4])
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i733 = data
  i732.name = i733[0]
  i732.value = new pc.Vec4( i733[1], i733[2], i733[3], i733[4] )
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i737 = data
  i736.name = i737[0]
  request.r(i737[1], i737[2], 0, i736, 'value')
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i741 = data
  i740.name = i741[0]
  i740.enabled = !!i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i743 = data
  i742.position = new pc.Vec3( i743[0], i743[1], i743[2] )
  i742.scale = new pc.Vec3( i743[3], i743[4], i743[5] )
  i742.rotation = new pc.Quat(i743[6], i743[7], i743[8], i743[9])
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'sharedMesh')
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'additionalVertexStreams')
  i746.enabled = !!i747[2]
  request.r(i747[3], i747[4], 0, i746, 'sharedMaterial')
  var i749 = i747[5]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i746.sharedMaterials = i748
  i746.receiveShadows = !!i747[6]
  i746.shadowCastingMode = i747[7]
  i746.sortingLayerID = i747[8]
  i746.sortingOrder = i747[9]
  i746.lightmapIndex = i747[10]
  i746.lightmapSceneIndex = i747[11]
  i746.lightmapScaleOffset = new pc.Vec4( i747[12], i747[13], i747[14], i747[15] )
  i746.lightProbeUsage = i747[16]
  i746.reflectionProbeUsage = i747[17]
  return i746
}

Deserializers["Goods"] = function (request, data, root) {
  var i752 = root || request.c( 'Goods' )
  var i753 = data
  i752.startPosition = new pc.Vec3( i753[0], i753[1], i753[2] )
  request.r(i753[3], i753[4], 0, i752, 'currentCase')
  i752.originLayer = i753[5]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i755 = data
  i754.center = new pc.Vec3( i755[0], i755[1], i755[2] )
  i754.size = new pc.Vec3( i755[3], i755[4], i755[5] )
  i754.enabled = !!i755[6]
  i754.isTrigger = !!i755[7]
  request.r(i755[8], i755[9], 0, i754, 'material')
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i757 = data
  i756.mass = i757[0]
  i756.drag = i757[1]
  i756.angularDrag = i757[2]
  i756.useGravity = !!i757[3]
  i756.isKinematic = !!i757[4]
  i756.constraints = i757[5]
  i756.maxAngularVelocity = i757[6]
  i756.collisionDetectionMode = i757[7]
  i756.interpolation = i757[8]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i759 = data
  i758.enabled = !!i759[0]
  i758.sortingLayerIndex = i759[1]
  i758.sortingOrder = i759[2]
  i758.sortingLayerName = i759[3]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i761 = data
  i760.name = i761[0]
  i760.tagId = i761[1]
  i760.enabled = !!i761[2]
  i760.isStatic = !!i761[3]
  i760.layer = i761[4]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i763 = data
  i762.name = i763[0]
  i762.halfPrecision = !!i763[1]
  i762.useUInt32IndexFormat = !!i763[2]
  i762.vertexCount = i763[3]
  i762.aabb = i763[4]
  var i765 = i763[5]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( !!i765[i + 0] );
  }
  i762.streams = i764
  i762.vertices = i763[6]
  var i767 = i763[7]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i767[i + 0]) );
  }
  i762.subMeshes = i766
  var i769 = i763[8]
  var i768 = []
  for(var i = 0; i < i769.length; i += 16) {
    i768.push( new pc.Mat4().setData(i769[i + 0], i769[i + 1], i769[i + 2], i769[i + 3],  i769[i + 4], i769[i + 5], i769[i + 6], i769[i + 7],  i769[i + 8], i769[i + 9], i769[i + 10], i769[i + 11],  i769[i + 12], i769[i + 13], i769[i + 14], i769[i + 15]) );
  }
  i762.bindposes = i768
  var i771 = i763[9]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i771[i + 0]) );
  }
  i762.blendShapes = i770
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i777 = data
  i776.triangles = i777[0]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i783 = data
  i782.name = i783[0]
  var i785 = i783[1]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i785[i + 0]) );
  }
  i782.frames = i784
  return i782
}

Deserializers["Case"] = function (request, data, root) {
  var i786 = root || request.c( 'Case' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'goodsPosition')
  request.r(i787[2], i787[3], 0, i786, 'currentGoods')
  i786.currentLayer = i787[4]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i789 = data
  i788.pivot = new pc.Vec2( i789[0], i789[1] )
  i788.anchorMin = new pc.Vec2( i789[2], i789[3] )
  i788.anchorMax = new pc.Vec2( i789[4], i789[5] )
  i788.sizeDelta = new pc.Vec2( i789[6], i789[7] )
  i788.anchoredPosition3D = new pc.Vec3( i789[8], i789[9], i789[10] )
  i788.rotation = new pc.Quat(i789[11], i789[12], i789[13], i789[14])
  i788.scale = new pc.Vec3( i789[15], i789[16], i789[17] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i791 = data
  i790.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i791[0], i790.main)
  i790.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i791[1], i790.colorBySpeed)
  i790.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i791[2], i790.colorOverLifetime)
  i790.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i791[3], i790.emission)
  i790.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i791[4], i790.rotationBySpeed)
  i790.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i791[5], i790.rotationOverLifetime)
  i790.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i791[6], i790.shape)
  i790.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i791[7], i790.sizeBySpeed)
  i790.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i791[8], i790.sizeOverLifetime)
  i790.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i791[9], i790.textureSheetAnimation)
  i790.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i791[10], i790.velocityOverLifetime)
  i790.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i791[11], i790.noise)
  i790.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i791[12], i790.inheritVelocity)
  i790.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i791[13], i790.forceOverLifetime)
  i790.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i791[14], i790.limitVelocityOverLifetime)
  i790.useAutoRandomSeed = !!i791[15]
  i790.randomSeed = i791[16]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemMain()
  var i793 = data
  i792.duration = i793[0]
  i792.loop = !!i793[1]
  i792.prewarm = !!i793[2]
  i792.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.startDelay)
  i792.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[4], i792.startLifetime)
  i792.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[5], i792.startSpeed)
  i792.startSize3D = !!i793[6]
  i792.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[7], i792.startSizeX)
  i792.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[8], i792.startSizeY)
  i792.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[9], i792.startSizeZ)
  i792.startRotation3D = !!i793[10]
  i792.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[11], i792.startRotationX)
  i792.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[12], i792.startRotationY)
  i792.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[13], i792.startRotationZ)
  i792.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i793[14], i792.startColor)
  i792.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[15], i792.gravityModifier)
  i792.simulationSpace = i793[16]
  request.r(i793[17], i793[18], 0, i792, 'customSimulationSpace')
  i792.simulationSpeed = i793[19]
  i792.useUnscaledTime = !!i793[20]
  i792.scalingMode = i793[21]
  i792.playOnAwake = !!i793[22]
  i792.maxParticles = i793[23]
  i792.emitterVelocityMode = i793[24]
  i792.stopAction = i793[25]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i794 = root || new pc.MinMaxCurve()
  var i795 = data
  i794.mode = i795[0]
  i794.curveMin = new pc.AnimationCurve( { keys_flow: i795[1] } )
  i794.curveMax = new pc.AnimationCurve( { keys_flow: i795[2] } )
  i794.curveMultiplier = i795[3]
  i794.constantMin = i795[4]
  i794.constantMax = i795[5]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i796 = root || new pc.MinMaxGradient()
  var i797 = data
  i796.mode = i797[0]
  i796.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i797[1], i796.gradientMin)
  i796.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i797[2], i796.gradientMax)
  i796.colorMin = new pc.Color(i797[3], i797[4], i797[5], i797[6])
  i796.colorMax = new pc.Color(i797[7], i797[8], i797[9], i797[10])
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i799 = data
  i798.mode = i799[0]
  var i801 = i799[1]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i801[i + 0]) );
  }
  i798.colorKeys = i800
  var i803 = i799[2]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i803[i + 0]) );
  }
  i798.alphaKeys = i802
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemColorBySpeed()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i805[1], i804.color)
  i804.range = new pc.Vec2( i805[2], i805[3] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i809 = data
  i808.color = new pc.Color(i809[0], i809[1], i809[2], i809[3])
  i808.time = i809[4]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i813 = data
  i812.alpha = i813[0]
  i812.time = i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemColorOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i815[1], i814.color)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemEmitter()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.rateOverTime)
  i816.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.rateOverDistance)
  var i819 = i817[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i819[i + 0]) );
  }
  i816.bursts = i818
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemBurst()
  var i823 = data
  i822.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[0], i822.count)
  i822.cycleCount = i823[1]
  i822.minCount = i823[2]
  i822.maxCount = i823[3]
  i822.repeatInterval = i823[4]
  i822.time = i823[5]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemRotationBySpeed()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.x)
  i824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.y)
  i824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.z)
  i824.separateAxes = !!i825[4]
  i824.range = new pc.Vec2( i825[5], i825[6] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemRotationOverLifetime()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.separateAxes = !!i827[4]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemShape()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.shapeType = i829[1]
  i828.randomDirectionAmount = i829[2]
  i828.sphericalDirectionAmount = i829[3]
  i828.randomPositionAmount = i829[4]
  i828.alignToDirection = !!i829[5]
  i828.radius = i829[6]
  i828.radiusMode = i829[7]
  i828.radiusSpread = i829[8]
  i828.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[9], i828.radiusSpeed)
  i828.radiusThickness = i829[10]
  i828.angle = i829[11]
  i828.length = i829[12]
  i828.boxThickness = new pc.Vec3( i829[13], i829[14], i829[15] )
  i828.meshShapeType = i829[16]
  request.r(i829[17], i829[18], 0, i828, 'mesh')
  request.r(i829[19], i829[20], 0, i828, 'meshRenderer')
  request.r(i829[21], i829[22], 0, i828, 'skinnedMeshRenderer')
  i828.useMeshMaterialIndex = !!i829[23]
  i828.meshMaterialIndex = i829[24]
  i828.useMeshColors = !!i829[25]
  i828.normalOffset = i829[26]
  i828.arc = i829[27]
  i828.arcMode = i829[28]
  i828.arcSpread = i829[29]
  i828.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[30], i828.arcSpeed)
  i828.donutRadius = i829[31]
  i828.position = new pc.Vec3( i829[32], i829[33], i829[34] )
  i828.rotation = new pc.Vec3( i829[35], i829[36], i829[37] )
  i828.scale = new pc.Vec3( i829[38], i829[39], i829[40] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemSizeBySpeed()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[1], i830.x)
  i830.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.y)
  i830.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[3], i830.z)
  i830.separateAxes = !!i831[4]
  i830.range = new pc.Vec2( i831[5], i831[6] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemSizeOverLifetime()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[1], i832.x)
  i832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.y)
  i832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[3], i832.z)
  i832.separateAxes = !!i833[4]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.mode = i835[1]
  i834.animation = i835[2]
  i834.numTilesX = i835[3]
  i834.numTilesY = i835[4]
  i834.useRandomRow = !!i835[5]
  i834.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[6], i834.frameOverTime)
  i834.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[7], i834.startFrame)
  i834.cycleCount = i835[8]
  i834.rowIndex = i835[9]
  i834.flipU = i835[10]
  i834.flipV = i835[11]
  i834.spriteCount = i835[12]
  var i837 = i835[13]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.sprites = i836
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[1], i840.x)
  i840.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.y)
  i840.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.z)
  i840.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[4], i840.radial)
  i840.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[5], i840.speedModifier)
  i840.space = i841[6]
  i840.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[7], i840.orbitalX)
  i840.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[8], i840.orbitalY)
  i840.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[9], i840.orbitalZ)
  i840.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[10], i840.orbitalOffsetX)
  i840.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[11], i840.orbitalOffsetY)
  i840.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[12], i840.orbitalOffsetZ)
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemNoise()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.separateAxes = !!i843[1]
  i842.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.strengthX)
  i842.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[3], i842.strengthY)
  i842.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[4], i842.strengthZ)
  i842.frequency = i843[5]
  i842.damping = !!i843[6]
  i842.octaveCount = i843[7]
  i842.octaveMultiplier = i843[8]
  i842.octaveScale = i843[9]
  i842.quality = i843[10]
  i842.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[11], i842.scrollSpeed)
  i842.scrollSpeedMultiplier = i843[12]
  i842.remapEnabled = !!i843[13]
  i842.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[14], i842.remapX)
  i842.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[15], i842.remapY)
  i842.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[16], i842.remapZ)
  i842.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[17], i842.positionAmount)
  i842.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[18], i842.rotationAmount)
  i842.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[19], i842.sizeAmount)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemInheritVelocity()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.mode = i845[1]
  i844.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[2], i844.curve)
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i846 = root || new pc.ParticleSystemForceOverLifetime()
  var i847 = data
  i846.enabled = !!i847[0]
  i846.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[1], i846.x)
  i846.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[2], i846.y)
  i846.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[3], i846.z)
  i846.space = i847[4]
  i846.randomized = !!i847[5]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i848 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i849 = data
  i848.enabled = !!i849[0]
  i848.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[1], i848.limit)
  i848.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[2], i848.limitX)
  i848.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[3], i848.limitY)
  i848.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[4], i848.limitZ)
  i848.dampen = i849[5]
  i848.separateAxes = !!i849[6]
  i848.space = i849[7]
  i848.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[8], i848.drag)
  i848.multiplyDragByParticleSize = !!i849[9]
  i848.multiplyDragByParticleVelocity = !!i849[10]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i851 = data
  i850.enabled = !!i851[0]
  request.r(i851[1], i851[2], 0, i850, 'sharedMaterial')
  var i853 = i851[3]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.sharedMaterials = i852
  i850.receiveShadows = !!i851[4]
  i850.shadowCastingMode = i851[5]
  i850.sortingLayerID = i851[6]
  i850.sortingOrder = i851[7]
  i850.lightmapIndex = i851[8]
  i850.lightmapSceneIndex = i851[9]
  i850.lightmapScaleOffset = new pc.Vec4( i851[10], i851[11], i851[12], i851[13] )
  i850.lightProbeUsage = i851[14]
  i850.reflectionProbeUsage = i851[15]
  request.r(i851[16], i851[17], 0, i850, 'mesh')
  i850.meshCount = i851[18]
  i850.activeVertexStreamsCount = i851[19]
  i850.alignment = i851[20]
  i850.renderMode = i851[21]
  i850.sortMode = i851[22]
  i850.lengthScale = i851[23]
  i850.velocityScale = i851[24]
  i850.cameraVelocityScale = i851[25]
  i850.normalDirection = i851[26]
  i850.sortingFudge = i851[27]
  i850.minParticleSize = i851[28]
  i850.maxParticleSize = i851[29]
  i850.pivot = new pc.Vec3( i851[30], i851[31], i851[32] )
  request.r(i851[33], i851[34], 0, i850, 'trailMaterial')
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i855 = data
  i854.cullTransparentMesh = !!i855[0]
  return i854
}

Deserializers["UnityEngine.UI.Extensions.CasualGame.UIParticleSystem"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.Extensions.CasualGame.UIParticleSystem' )
  var i857 = data
  i856.fixedTime = !!i857[0]
  i856.use3dRotation = !!i857[1]
  request.r(i857[2], i857[3], 0, i856, 'm_Material')
  i856.m_Maskable = !!i857[4]
  i856.m_Color = new pc.Color(i857[5], i857[6], i857[7], i857[8])
  i856.m_RaycastTarget = !!i857[9]
  i856.m_RaycastPadding = new pc.Vec4( i857[10], i857[11], i857[12], i857[13] )
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i859 = data
  i858.name = i859[0]
  i858.atlasId = i859[1]
  i858.mipmapCount = i859[2]
  i858.hdr = !!i859[3]
  i858.size = i859[4]
  i858.anisoLevel = i859[5]
  i858.filterMode = i859[6]
  var i861 = i859[7]
  var i860 = []
  for(var i = 0; i < i861.length; i += 4) {
    i860.push( UnityEngine.Rect.MinMaxRect(i861[i + 0], i861[i + 1], i861[i + 2], i861[i + 3]) );
  }
  i858.rects = i860
  i858.wrapU = i859[8]
  i858.wrapV = i859[9]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i865 = data
  i864.name = i865[0]
  i864.index = i865[1]
  i864.startup = !!i865[2]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i867 = data
  i866.enabled = !!i867[0]
  i866.aspect = i867[1]
  i866.orthographic = !!i867[2]
  i866.orthographicSize = i867[3]
  i866.backgroundColor = new pc.Color(i867[4], i867[5], i867[6], i867[7])
  i866.nearClipPlane = i867[8]
  i866.farClipPlane = i867[9]
  i866.fieldOfView = i867[10]
  i866.depth = i867[11]
  i866.clearFlags = i867[12]
  i866.cullingMask = i867[13]
  i866.rect = i867[14]
  request.r(i867[15], i867[16], 0, i866, 'targetTexture')
  i866.usePhysicalProperties = !!i867[17]
  i866.focalLength = i867[18]
  i866.sensorSize = new pc.Vec2( i867[19], i867[20] )
  i866.lensShift = new pc.Vec2( i867[21], i867[22] )
  i866.gateFit = i867[23]
  i866.commandBufferCount = i867[24]
  i866.cameraType = i867[25]
  return i866
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i869 = data
  i868.m_RenderShadows = !!i869[0]
  i868.m_RequiresDepthTextureOption = i869[1]
  i868.m_RequiresOpaqueTextureOption = i869[2]
  i868.m_CameraType = i869[3]
  var i871 = i869[4]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 1, i870, '')
  }
  i868.m_Cameras = i870
  i868.m_RendererIndex = i869[5]
  i868.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i869[6] )
  request.r(i869[7], i869[8], 0, i868, 'm_VolumeTrigger')
  i868.m_VolumeFrameworkUpdateModeOption = i869[9]
  i868.m_RenderPostProcessing = !!i869[10]
  i868.m_Antialiasing = i869[11]
  i868.m_AntialiasingQuality = i869[12]
  i868.m_StopNaN = !!i869[13]
  i868.m_Dithering = !!i869[14]
  i868.m_ClearDepth = !!i869[15]
  i868.m_AllowXRRendering = !!i869[16]
  i868.m_AllowHDROutput = !!i869[17]
  i868.m_UseScreenCoordOverride = !!i869[18]
  i868.m_ScreenSizeOverride = new pc.Vec4( i869[19], i869[20], i869[21], i869[22] )
  i868.m_ScreenCoordScaleBias = new pc.Vec4( i869[23], i869[24], i869[25], i869[26] )
  i868.m_RequiresDepthTexture = !!i869[27]
  i868.m_RequiresColorTexture = !!i869[28]
  i868.m_Version = i869[29]
  i868.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i869[30], i868.m_TaaSettings)
  return i868
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i875 = data
  i874.m_Quality = i875[0]
  i874.m_FrameInfluence = i875[1]
  i874.m_JitterScale = i875[2]
  i874.m_MipBias = i875[3]
  i874.m_VarianceClampScale = i875[4]
  i874.m_ContrastAdaptiveSharpening = i875[5]
  return i874
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i877 = data
  i876.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i877[0] )
  i876.m_MaxRayIntersections = i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i879 = data
  i878.enabled = !!i879[0]
  i878.type = i879[1]
  i878.color = new pc.Color(i879[2], i879[3], i879[4], i879[5])
  i878.cullingMask = i879[6]
  i878.intensity = i879[7]
  i878.range = i879[8]
  i878.spotAngle = i879[9]
  i878.shadows = i879[10]
  i878.shadowNormalBias = i879[11]
  i878.shadowBias = i879[12]
  i878.shadowStrength = i879[13]
  i878.shadowResolution = i879[14]
  i878.lightmapBakeType = i879[15]
  i878.renderMode = i879[16]
  request.r(i879[17], i879[18], 0, i878, 'cookie')
  i878.cookieSize = i879[19]
  return i878
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i881 = data
  i880.m_Version = i881[0]
  i880.m_UsePipelineSettings = !!i881[1]
  i880.m_AdditionalLightsShadowResolutionTier = i881[2]
  i880.m_LightLayerMask = i881[3]
  i880.m_RenderingLayers = i881[4]
  i880.m_CustomShadowLayers = !!i881[5]
  i880.m_ShadowLayerMask = i881[6]
  i880.m_ShadowRenderingLayers = i881[7]
  i880.m_LightCookieSize = new pc.Vec2( i881[8], i881[9] )
  i880.m_LightCookieOffset = new pc.Vec2( i881[10], i881[11] )
  i880.m_SoftShadowQuality = i881[12]
  return i880
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i883 = data
  i882.priority = i883[0]
  i882.blendDistance = i883[1]
  i882.weight = i883[2]
  request.r(i883[3], i883[4], 0, i882, 'sharedProfile')
  i882.m_IsGlobal = !!i883[5]
  return i882
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'm_FirstSelected')
  i884.m_sendNavigationEvents = !!i885[2]
  i884.m_DragThreshold = i885[3]
  return i884
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i887 = data
  i886.m_HorizontalAxis = i887[0]
  i886.m_VerticalAxis = i887[1]
  i886.m_SubmitButton = i887[2]
  i886.m_CancelButton = i887[3]
  i886.m_InputActionsPerSecond = i887[4]
  i886.m_RepeatDelay = i887[5]
  i886.m_ForceModuleActive = !!i887[6]
  i886.m_SendPointerHoverToParent = !!i887[7]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i889 = data
  i888.enabled = !!i889[0]
  i888.planeDistance = i889[1]
  i888.referencePixelsPerUnit = i889[2]
  i888.isFallbackOverlay = !!i889[3]
  i888.renderMode = i889[4]
  i888.renderOrder = i889[5]
  i888.sortingLayerName = i889[6]
  i888.sortingOrder = i889[7]
  i888.scaleFactor = i889[8]
  request.r(i889[9], i889[10], 0, i888, 'worldCamera')
  i888.overrideSorting = !!i889[11]
  i888.pixelPerfect = !!i889[12]
  i888.targetDisplay = i889[13]
  i888.overridePixelPerfect = !!i889[14]
  return i888
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i891 = data
  i890.m_UiScaleMode = i891[0]
  i890.m_ReferencePixelsPerUnit = i891[1]
  i890.m_ScaleFactor = i891[2]
  i890.m_ReferenceResolution = new pc.Vec2( i891[3], i891[4] )
  i890.m_ScreenMatchMode = i891[5]
  i890.m_MatchWidthOrHeight = i891[6]
  i890.m_PhysicalUnit = i891[7]
  i890.m_FallbackScreenDPI = i891[8]
  i890.m_DefaultSpriteDPI = i891[9]
  i890.m_DynamicPixelsPerUnit = i891[10]
  i890.m_PresetInfoIsWorld = !!i891[11]
  return i890
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i893 = data
  i892.m_IgnoreReversedGraphics = !!i893[0]
  i892.m_BlockingObjects = i893[1]
  i892.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i893[2] )
  return i892
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.UI.Image' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'm_Sprite')
  i894.m_Type = i895[2]
  i894.m_PreserveAspect = !!i895[3]
  i894.m_FillCenter = !!i895[4]
  i894.m_FillMethod = i895[5]
  i894.m_FillAmount = i895[6]
  i894.m_FillClockwise = !!i895[7]
  i894.m_FillOrigin = i895[8]
  i894.m_UseSpriteMesh = !!i895[9]
  i894.m_PixelsPerUnitMultiplier = i895[10]
  request.r(i895[11], i895[12], 0, i894, 'm_Material')
  i894.m_Maskable = !!i895[13]
  i894.m_Color = new pc.Color(i895[14], i895[15], i895[16], i895[17])
  i894.m_RaycastTarget = !!i895[18]
  i894.m_RaycastPadding = new pc.Vec4( i895[19], i895[20], i895[21], i895[22] )
  return i894
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i897 = data
  i896.m_hasFontAssetChanged = !!i897[0]
  request.r(i897[1], i897[2], 0, i896, 'm_baseMaterial')
  i896.m_maskOffset = new pc.Vec4( i897[3], i897[4], i897[5], i897[6] )
  i896.m_text = i897[7]
  i896.m_isRightToLeft = !!i897[8]
  request.r(i897[9], i897[10], 0, i896, 'm_fontAsset')
  request.r(i897[11], i897[12], 0, i896, 'm_sharedMaterial')
  var i899 = i897[13]
  var i898 = []
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 2, i898, '')
  }
  i896.m_fontSharedMaterials = i898
  request.r(i897[14], i897[15], 0, i896, 'm_fontMaterial')
  var i901 = i897[16]
  var i900 = []
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 2, i900, '')
  }
  i896.m_fontMaterials = i900
  i896.m_fontColor32 = UnityEngine.Color32.ConstructColor(i897[17], i897[18], i897[19], i897[20])
  i896.m_fontColor = new pc.Color(i897[21], i897[22], i897[23], i897[24])
  i896.m_enableVertexGradient = !!i897[25]
  i896.m_colorMode = i897[26]
  i896.m_fontColorGradient = request.d('TMPro.VertexGradient', i897[27], i896.m_fontColorGradient)
  request.r(i897[28], i897[29], 0, i896, 'm_fontColorGradientPreset')
  request.r(i897[30], i897[31], 0, i896, 'm_spriteAsset')
  i896.m_tintAllSprites = !!i897[32]
  request.r(i897[33], i897[34], 0, i896, 'm_StyleSheet')
  i896.m_TextStyleHashCode = i897[35]
  i896.m_overrideHtmlColors = !!i897[36]
  i896.m_faceColor = UnityEngine.Color32.ConstructColor(i897[37], i897[38], i897[39], i897[40])
  i896.m_fontSize = i897[41]
  i896.m_fontSizeBase = i897[42]
  i896.m_fontWeight = i897[43]
  i896.m_enableAutoSizing = !!i897[44]
  i896.m_fontSizeMin = i897[45]
  i896.m_fontSizeMax = i897[46]
  i896.m_fontStyle = i897[47]
  i896.m_HorizontalAlignment = i897[48]
  i896.m_VerticalAlignment = i897[49]
  i896.m_textAlignment = i897[50]
  i896.m_characterSpacing = i897[51]
  i896.m_wordSpacing = i897[52]
  i896.m_lineSpacing = i897[53]
  i896.m_lineSpacingMax = i897[54]
  i896.m_paragraphSpacing = i897[55]
  i896.m_charWidthMaxAdj = i897[56]
  i896.m_enableWordWrapping = !!i897[57]
  i896.m_wordWrappingRatios = i897[58]
  i896.m_overflowMode = i897[59]
  request.r(i897[60], i897[61], 0, i896, 'm_linkedTextComponent')
  request.r(i897[62], i897[63], 0, i896, 'parentLinkedComponent')
  i896.m_enableKerning = !!i897[64]
  i896.m_enableExtraPadding = !!i897[65]
  i896.checkPaddingRequired = !!i897[66]
  i896.m_isRichText = !!i897[67]
  i896.m_parseCtrlCharacters = !!i897[68]
  i896.m_isOrthographic = !!i897[69]
  i896.m_isCullingEnabled = !!i897[70]
  i896.m_horizontalMapping = i897[71]
  i896.m_verticalMapping = i897[72]
  i896.m_uvLineOffset = i897[73]
  i896.m_geometrySortingOrder = i897[74]
  i896.m_IsTextObjectScaleStatic = !!i897[75]
  i896.m_VertexBufferAutoSizeReduction = !!i897[76]
  i896.m_useMaxVisibleDescender = !!i897[77]
  i896.m_pageToDisplay = i897[78]
  i896.m_margin = new pc.Vec4( i897[79], i897[80], i897[81], i897[82] )
  i896.m_isUsingLegacyAnimationComponent = !!i897[83]
  i896.m_isVolumetricText = !!i897[84]
  request.r(i897[85], i897[86], 0, i896, 'm_Material')
  i896.m_Maskable = !!i897[87]
  i896.m_Color = new pc.Color(i897[88], i897[89], i897[90], i897[91])
  i896.m_RaycastTarget = !!i897[92]
  i896.m_RaycastPadding = new pc.Vec4( i897[93], i897[94], i897[95], i897[96] )
  return i896
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.VertexGradient' )
  var i903 = data
  i902.topLeft = new pc.Color(i903[0], i903[1], i903[2], i903[3])
  i902.topRight = new pc.Color(i903[4], i903[5], i903[6], i903[7])
  i902.bottomLeft = new pc.Color(i903[8], i903[9], i903[10], i903[11])
  i902.bottomRight = new pc.Color(i903[12], i903[13], i903[14], i903[15])
  return i902
}

Deserializers["UIManager"] = function (request, data, root) {
  var i904 = root || request.c( 'UIManager' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'textBack')
  request.r(i905[2], i905[3], 0, i904, 'goodText')
  return i904
}

Deserializers["GameManager"] = function (request, data, root) {
  var i906 = root || request.c( 'GameManager' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'goodsPrefab')
  request.r(i907[2], i907[3], 0, i906, 'casePrefab')
  i906.startPosition = new pc.Vec3( i907[4], i907[5], i907[6] )
  i906.spacingX = i907[7]
  i906.spacingY = i907[8]
  i906.pyramidLayers = i907[9]
  request.r(i907[10], i907[11], 0, i906, 'caseDatabase')
  request.r(i907[12], i907[13], 0, i906, 'goodsDatabase')
  return i906
}

Deserializers["EffectManager"] = function (request, data, root) {
  var i908 = root || request.c( 'EffectManager' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'clickClip')
  request.r(i909[2], i909[3], 0, i908, 'bgmClip')
  request.r(i909[4], i909[5], 0, i908, 'sfxSource')
  request.r(i909[6], i909[7], 0, i908, 'bgmSource')
  request.r(i909[8], i909[9], 0, i908, 'popEffectPrefab')
  request.r(i909[10], i909[11], 0, i908, 'goodImage')
  i908.fadeInDuration = i909[12]
  i908.visibleDuration = i909[13]
  i908.fadeOutDuration = i909[14]
  i908.poolSize = i909[15]
  request.r(i909[16], i909[17], 0, i908, 'effectsPoolParent')
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'clip')
  request.r(i911[2], i911[3], 0, i910, 'outputAudioMixerGroup')
  i910.playOnAwake = !!i911[4]
  i910.loop = !!i911[5]
  i910.time = i911[6]
  i910.volume = i911[7]
  i910.pitch = i911[8]
  i910.enabled = !!i911[9]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i913 = data
  i912.ambientIntensity = i913[0]
  i912.reflectionIntensity = i913[1]
  i912.ambientMode = i913[2]
  i912.ambientLight = new pc.Color(i913[3], i913[4], i913[5], i913[6])
  i912.ambientSkyColor = new pc.Color(i913[7], i913[8], i913[9], i913[10])
  i912.ambientGroundColor = new pc.Color(i913[11], i913[12], i913[13], i913[14])
  i912.ambientEquatorColor = new pc.Color(i913[15], i913[16], i913[17], i913[18])
  i912.fogColor = new pc.Color(i913[19], i913[20], i913[21], i913[22])
  i912.fogEndDistance = i913[23]
  i912.fogStartDistance = i913[24]
  i912.fogDensity = i913[25]
  i912.fog = !!i913[26]
  request.r(i913[27], i913[28], 0, i912, 'skybox')
  i912.fogMode = i913[29]
  var i915 = i913[30]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i915[i + 0]) );
  }
  i912.lightmaps = i914
  i912.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i913[31], i912.lightProbes)
  i912.lightmapsMode = i913[32]
  i912.mixedBakeMode = i913[33]
  i912.environmentLightingMode = i913[34]
  i912.ambientProbe = new pc.SphericalHarmonicsL2(i913[35])
  i912.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i913[36])
  i912.useReferenceAmbientProbe = !!i913[37]
  request.r(i913[38], i913[39], 0, i912, 'customReflection')
  request.r(i913[40], i913[41], 0, i912, 'defaultReflection')
  i912.defaultReflectionMode = i913[42]
  i912.defaultReflectionResolution = i913[43]
  i912.sunLightObjectId = i913[44]
  i912.pixelLightCount = i913[45]
  i912.defaultReflectionHDR = !!i913[46]
  i912.hasLightDataAsset = !!i913[47]
  i912.hasManualGenerate = !!i913[48]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'lightmapColor')
  request.r(i919[2], i919[3], 0, i918, 'lightmapDirection')
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i920 = root || new UnityEngine.LightProbes()
  var i921 = data
  return i920
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'panelPrefab')
  var i931 = i929[2]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i931.length; i += 1) {
    i930.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i931[i + 0]));
  }
  i928.prefabs = i930
  return i928
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i935 = data
  i934.type = i935[0]
  request.r(i935[1], i935[2], 0, i934, 'prefab')
  return i934
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i937 = data
  i936.m_Spacing = i937[0]
  i936.m_ChildForceExpandWidth = !!i937[1]
  i936.m_ChildForceExpandHeight = !!i937[2]
  i936.m_ChildControlWidth = !!i937[3]
  i936.m_ChildControlHeight = !!i937[4]
  i936.m_ChildScaleWidth = !!i937[5]
  i936.m_ChildScaleHeight = !!i937[6]
  i936.m_ReverseArrangement = !!i937[7]
  i936.m_Padding = UnityEngine.RectOffset.FromPaddings(i937[8], i937[9], i937[10], i937[11])
  i936.m_ChildAlignment = i937[12]
  return i936
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i939 = data
  i938.m_HorizontalFit = i939[0]
  i938.m_VerticalFit = i939[1]
  return i938
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'contentHolder')
  return i940
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'nameLabel')
  request.r(i943[2], i943[3], 0, i942, 'scrollRect')
  request.r(i943[4], i943[5], 0, i942, 'viewport')
  request.r(i943[6], i943[7], 0, i942, 'Canvas')
  return i942
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i945 = data
  i944.m_IgnoreLayout = !!i945[0]
  i944.m_MinWidth = i945[1]
  i944.m_MinHeight = i945[2]
  i944.m_PreferredWidth = i945[3]
  i944.m_PreferredHeight = i945[4]
  i944.m_FlexibleWidth = i945[5]
  i944.m_FlexibleHeight = i945[6]
  i944.m_LayoutPriority = i945[7]
  return i944
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.Button' )
  var i947 = data
  i946.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i947[0], i946.m_OnClick)
  i946.m_Navigation = request.d('UnityEngine.UI.Navigation', i947[1], i946.m_Navigation)
  i946.m_Transition = i947[2]
  i946.m_Colors = request.d('UnityEngine.UI.ColorBlock', i947[3], i946.m_Colors)
  i946.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i947[4], i946.m_SpriteState)
  i946.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i947[5], i946.m_AnimationTriggers)
  i946.m_Interactable = !!i947[6]
  request.r(i947[7], i947[8], 0, i946, 'm_TargetGraphic')
  return i946
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i949 = data
  i948.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i949[0], i948.m_PersistentCalls)
  return i948
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i951 = data
  var i953 = i951[0]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('UnityEngine.Events.PersistentCall', i953[i + 0]));
  }
  i950.m_Calls = i952
  return i950
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'm_Target')
  i956.m_TargetAssemblyTypeName = i957[2]
  i956.m_MethodName = i957[3]
  i956.m_Mode = i957[4]
  i956.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i957[5], i956.m_Arguments)
  i956.m_CallState = i957[6]
  return i956
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'm_ObjectArgument')
  i958.m_ObjectArgumentAssemblyTypeName = i959[2]
  i958.m_IntArgument = i959[3]
  i958.m_FloatArgument = i959[4]
  i958.m_StringArgument = i959[5]
  i958.m_BoolArgument = !!i959[6]
  return i958
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i961 = data
  i960.m_Mode = i961[0]
  i960.m_WrapAround = !!i961[1]
  request.r(i961[2], i961[3], 0, i960, 'm_SelectOnUp')
  request.r(i961[4], i961[5], 0, i960, 'm_SelectOnDown')
  request.r(i961[6], i961[7], 0, i960, 'm_SelectOnLeft')
  request.r(i961[8], i961[9], 0, i960, 'm_SelectOnRight')
  return i960
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i963 = data
  i962.m_NormalColor = new pc.Color(i963[0], i963[1], i963[2], i963[3])
  i962.m_HighlightedColor = new pc.Color(i963[4], i963[5], i963[6], i963[7])
  i962.m_PressedColor = new pc.Color(i963[8], i963[9], i963[10], i963[11])
  i962.m_SelectedColor = new pc.Color(i963[12], i963[13], i963[14], i963[15])
  i962.m_DisabledColor = new pc.Color(i963[16], i963[17], i963[18], i963[19])
  i962.m_ColorMultiplier = i963[20]
  i962.m_FadeDuration = i963[21]
  return i962
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'm_HighlightedSprite')
  request.r(i965[2], i965[3], 0, i964, 'm_PressedSprite')
  request.r(i965[4], i965[5], 0, i964, 'm_SelectedSprite')
  request.r(i965[6], i965[7], 0, i964, 'm_DisabledSprite')
  return i964
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i967 = data
  i966.m_NormalTrigger = i967[0]
  i966.m_HighlightedTrigger = i967[1]
  i966.m_PressedTrigger = i967[2]
  i966.m_SelectedTrigger = i967[3]
  i966.m_DisabledTrigger = i967[4]
  return i966
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.UI.Text' )
  var i969 = data
  i968.m_FontData = request.d('UnityEngine.UI.FontData', i969[0], i968.m_FontData)
  i968.m_Text = i969[1]
  request.r(i969[2], i969[3], 0, i968, 'm_Material')
  i968.m_Maskable = !!i969[4]
  i968.m_Color = new pc.Color(i969[5], i969[6], i969[7], i969[8])
  i968.m_RaycastTarget = !!i969[9]
  i968.m_RaycastPadding = new pc.Vec4( i969[10], i969[11], i969[12], i969[13] )
  return i968
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.UI.FontData' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'm_Font')
  i970.m_FontSize = i971[2]
  i970.m_FontStyle = i971[3]
  i970.m_BestFit = !!i971[4]
  i970.m_MinSize = i971[5]
  i970.m_MaxSize = i971[6]
  i970.m_Alignment = i971[7]
  i970.m_AlignByGeometry = !!i971[8]
  i970.m_RichText = !!i971[9]
  i970.m_HorizontalOverflow = i971[10]
  i970.m_VerticalOverflow = i971[11]
  i970.m_LineSpacing = i971[12]
  return i970
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'm_Content')
  i972.m_Horizontal = !!i973[2]
  i972.m_Vertical = !!i973[3]
  i972.m_MovementType = i973[4]
  i972.m_Elasticity = i973[5]
  i972.m_Inertia = !!i973[6]
  i972.m_DecelerationRate = i973[7]
  i972.m_ScrollSensitivity = i973[8]
  request.r(i973[9], i973[10], 0, i972, 'm_Viewport')
  request.r(i973[11], i973[12], 0, i972, 'm_HorizontalScrollbar')
  request.r(i973[13], i973[14], 0, i972, 'm_VerticalScrollbar')
  i972.m_HorizontalScrollbarVisibility = i973[15]
  i972.m_VerticalScrollbarVisibility = i973[16]
  i972.m_HorizontalScrollbarSpacing = i973[17]
  i972.m_VerticalScrollbarSpacing = i973[18]
  i972.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i973[19], i972.m_OnValueChanged)
  return i972
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i975 = data
  i974.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i975[0], i974.m_PersistentCalls)
  return i974
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.UI.Mask' )
  var i977 = data
  i976.m_ShowMaskGraphic = !!i977[0]
  return i976
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'm_HandleRect')
  i978.m_Direction = i979[2]
  i978.m_Value = i979[3]
  i978.m_Size = i979[4]
  i978.m_NumberOfSteps = i979[5]
  i978.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i979[6], i978.m_OnValueChanged)
  i978.m_Navigation = request.d('UnityEngine.UI.Navigation', i979[7], i978.m_Navigation)
  i978.m_Transition = i979[8]
  i978.m_Colors = request.d('UnityEngine.UI.ColorBlock', i979[9], i978.m_Colors)
  i978.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i979[10], i978.m_SpriteState)
  i978.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i979[11], i978.m_AnimationTriggers)
  i978.m_Interactable = !!i979[12]
  request.r(i979[13], i979[14], 0, i978, 'm_TargetGraphic')
  return i978
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i981 = data
  i980.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i981[0], i980.m_PersistentCalls)
  return i980
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i983 = data
  var i985 = i983[0]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i985.length; i += 1) {
    i984.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i985[i + 0]));
  }
  i982.m_Delegates = i984
  return i982
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i989 = data
  i988.eventID = i989[0]
  i988.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i989[1], i988.callback)
  return i988
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i991 = data
  i990.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i991[0], i990.m_PersistentCalls)
  return i990
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'nameLabel')
  request.r(i993[2], i993[3], 0, i992, 'valueLabel')
  i992.colorDefault = new pc.Color(i993[4], i993[5], i993[6], i993[7])
  i992.colorSelected = new pc.Color(i993[8], i993[9], i993[10], i993[11])
  return i992
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'nameLabel')
  request.r(i995[2], i995[3], 0, i994, 'valueToggle')
  request.r(i995[4], i995[5], 0, i994, 'checkmarkImage')
  i994.colorDefault = new pc.Color(i995[6], i995[7], i995[8], i995[9])
  i994.colorSelected = new pc.Color(i995[10], i995[11], i995[12], i995[13])
  return i994
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i997 = data
  i996.toggleTransition = i997[0]
  request.r(i997[1], i997[2], 0, i996, 'graphic')
  i996.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i997[3], i996.onValueChanged)
  request.r(i997[4], i997[5], 0, i996, 'm_Group')
  i996.m_IsOn = !!i997[6]
  i996.m_Navigation = request.d('UnityEngine.UI.Navigation', i997[7], i996.m_Navigation)
  i996.m_Transition = i997[8]
  i996.m_Colors = request.d('UnityEngine.UI.ColorBlock', i997[9], i996.m_Colors)
  i996.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i997[10], i996.m_SpriteState)
  i996.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i997[11], i996.m_AnimationTriggers)
  i996.m_Interactable = !!i997[12]
  request.r(i997[13], i997[14], 0, i996, 'm_TargetGraphic')
  return i996
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i999 = data
  i998.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i999[0], i998.m_PersistentCalls)
  return i998
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'nameLabel')
  request.r(i1001[2], i1001[3], 0, i1000, 'valueLabel')
  i1000.colorDefault = new pc.Color(i1001[4], i1001[5], i1001[6], i1001[7])
  i1000.colorSelected = new pc.Color(i1001[8], i1001[9], i1001[10], i1001[11])
  return i1000
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'nameLabel')
  request.r(i1003[2], i1003[3], 0, i1002, 'valueLabel')
  i1002.colorDefault = new pc.Color(i1003[4], i1003[5], i1003[6], i1003[7])
  i1002.colorSelected = new pc.Color(i1003[8], i1003[9], i1003[10], i1003[11])
  return i1002
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'nameLabel')
  request.r(i1005[2], i1005[3], 0, i1004, 'valueLabel')
  i1004.colorDefault = new pc.Color(i1005[4], i1005[5], i1005[6], i1005[7])
  i1004.colorSelected = new pc.Color(i1005[8], i1005[9], i1005[10], i1005[11])
  return i1004
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'nextButtonText')
  request.r(i1007[2], i1007[3], 0, i1006, 'previousButtonText')
  request.r(i1007[4], i1007[5], 0, i1006, 'nameLabel')
  request.r(i1007[6], i1007[7], 0, i1006, 'valueLabel')
  i1006.colorDefault = new pc.Color(i1007[8], i1007[9], i1007[10], i1007[11])
  i1006.colorSelected = new pc.Color(i1007[12], i1007[13], i1007[14], i1007[15])
  return i1006
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'nameLabel')
  i1008.colorDefault = new pc.Color(i1009[2], i1009[3], i1009[4], i1009[5])
  i1008.colorSelected = new pc.Color(i1009[6], i1009[7], i1009[8], i1009[9])
  return i1008
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'nameLabel')
  request.r(i1011[2], i1011[3], 0, i1010, 'valueToggle')
  i1010.colorDefault = new pc.Color(i1011[4], i1011[5], i1011[6], i1011[7])
  i1010.colorSelected = new pc.Color(i1011[8], i1011[9], i1011[10], i1011[11])
  return i1010
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i1013 = data
  i1012.toggleTransition = i1013[0]
  request.r(i1013[1], i1013[2], 0, i1012, 'graphic')
  i1012.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1013[3], i1012.onValueChanged)
  request.r(i1013[4], i1013[5], 0, i1012, 'content')
  request.r(i1013[6], i1013[7], 0, i1012, 'arrowOpened')
  request.r(i1013[8], i1013[9], 0, i1012, 'arrowClosed')
  request.r(i1013[10], i1013[11], 0, i1012, 'm_Group')
  i1012.m_IsOn = !!i1013[12]
  i1012.m_Navigation = request.d('UnityEngine.UI.Navigation', i1013[13], i1012.m_Navigation)
  i1012.m_Transition = i1013[14]
  i1012.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1013[15], i1012.m_Colors)
  i1012.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1013[16], i1012.m_SpriteState)
  i1012.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1013[17], i1012.m_AnimationTriggers)
  i1012.m_Interactable = !!i1013[18]
  request.r(i1013[19], i1013[20], 0, i1012, 'm_TargetGraphic')
  return i1012
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'nameLabel')
  request.r(i1015[2], i1015[3], 0, i1014, 'valueToggle')
  request.r(i1015[4], i1015[5], 0, i1014, 'colorImage')
  request.r(i1015[6], i1015[7], 0, i1014, 'fieldR')
  request.r(i1015[8], i1015[9], 0, i1014, 'fieldG')
  request.r(i1015[10], i1015[11], 0, i1014, 'fieldB')
  request.r(i1015[12], i1015[13], 0, i1014, 'fieldA')
  i1014.colorDefault = new pc.Color(i1015[14], i1015[15], i1015[16], i1015[17])
  i1014.colorSelected = new pc.Color(i1015[18], i1015[19], i1015[20], i1015[21])
  return i1014
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'nameLabel')
  request.r(i1017[2], i1017[3], 0, i1016, 'valueLabel')
  i1016.colorDefault = new pc.Color(i1017[4], i1017[5], i1017[6], i1017[7])
  i1016.colorSelected = new pc.Color(i1017[8], i1017[9], i1017[10], i1017[11])
  return i1016
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'nameLabel')
  request.r(i1019[2], i1019[3], 0, i1018, 'valueToggle')
  request.r(i1019[4], i1019[5], 0, i1018, 'fieldX')
  request.r(i1019[6], i1019[7], 0, i1018, 'fieldY')
  i1018.colorDefault = new pc.Color(i1019[8], i1019[9], i1019[10], i1019[11])
  i1018.colorSelected = new pc.Color(i1019[12], i1019[13], i1019[14], i1019[15])
  return i1018
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'nameLabel')
  request.r(i1021[2], i1021[3], 0, i1020, 'valueToggle')
  request.r(i1021[4], i1021[5], 0, i1020, 'fieldX')
  request.r(i1021[6], i1021[7], 0, i1020, 'fieldY')
  request.r(i1021[8], i1021[9], 0, i1020, 'fieldZ')
  i1020.colorDefault = new pc.Color(i1021[10], i1021[11], i1021[12], i1021[13])
  i1020.colorSelected = new pc.Color(i1021[14], i1021[15], i1021[16], i1021[17])
  return i1020
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'nameLabel')
  request.r(i1023[2], i1023[3], 0, i1022, 'valueToggle')
  request.r(i1023[4], i1023[5], 0, i1022, 'fieldX')
  request.r(i1023[6], i1023[7], 0, i1022, 'fieldY')
  request.r(i1023[8], i1023[9], 0, i1022, 'fieldZ')
  request.r(i1023[10], i1023[11], 0, i1022, 'fieldW')
  i1022.colorDefault = new pc.Color(i1023[12], i1023[13], i1023[14], i1023[15])
  i1022.colorSelected = new pc.Color(i1023[16], i1023[17], i1023[18], i1023[19])
  return i1022
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i1025 = data
  i1024.colorDefault = new pc.Color(i1025[0], i1025[1], i1025[2], i1025[3])
  i1024.colorSelected = new pc.Color(i1025[4], i1025[5], i1025[6], i1025[7])
  return i1024
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1027 = data
  i1026.m_Spacing = i1027[0]
  i1026.m_ChildForceExpandWidth = !!i1027[1]
  i1026.m_ChildForceExpandHeight = !!i1027[2]
  i1026.m_ChildControlWidth = !!i1027[3]
  i1026.m_ChildControlHeight = !!i1027[4]
  i1026.m_ChildScaleWidth = !!i1027[5]
  i1026.m_ChildScaleHeight = !!i1027[6]
  i1026.m_ReverseArrangement = !!i1027[7]
  i1026.m_Padding = UnityEngine.RectOffset.FromPaddings(i1027[8], i1027[9], i1027[10], i1027[11])
  i1026.m_ChildAlignment = i1027[12]
  return i1026
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i1029 = data
  i1028.colorDefault = new pc.Color(i1029[0], i1029[1], i1029[2], i1029[3])
  i1028.colorSelected = new pc.Color(i1029[4], i1029[5], i1029[6], i1029[7])
  return i1028
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'nameLabel')
  request.r(i1031[2], i1031[3], 0, i1030, 'header')
  i1030.colorDefault = new pc.Color(i1031[4], i1031[5], i1031[6], i1031[7])
  i1030.colorSelected = new pc.Color(i1031[8], i1031[9], i1031[10], i1031[11])
  return i1030
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'nameLabel')
  request.r(i1033[2], i1033[3], 0, i1032, 'valueToggle')
  var i1035 = i1033[4]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 1, i1034, '')
  }
  i1032.toggles = i1034
  i1032.colorDefault = new pc.Color(i1033[5], i1033[6], i1033[7], i1033[8])
  i1032.colorSelected = new pc.Color(i1033[9], i1033[10], i1033[11], i1033[12])
  return i1032
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'nameLabel')
  request.r(i1039[2], i1039[3], 0, i1038, 'valueToggle')
  request.r(i1039[4], i1039[5], 0, i1038, 'checkmarkImage')
  i1038.colorDefault = new pc.Color(i1039[6], i1039[7], i1039[8], i1039[9])
  i1038.colorSelected = new pc.Color(i1039[10], i1039[11], i1039[12], i1039[13])
  return i1038
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'nameLabel')
  request.r(i1041[2], i1041[3], 0, i1040, 'valueToggle')
  request.r(i1041[4], i1041[5], 0, i1040, 'checkmarkImage')
  i1040.colorDefault = new pc.Color(i1041[6], i1041[7], i1041[8], i1041[9])
  i1040.colorSelected = new pc.Color(i1041[10], i1041[11], i1041[12], i1041[13])
  return i1040
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'nextButtonText')
  request.r(i1043[2], i1043[3], 0, i1042, 'previousButtonText')
  request.r(i1043[4], i1043[5], 0, i1042, 'nameLabel')
  request.r(i1043[6], i1043[7], 0, i1042, 'valueLabel')
  i1042.colorDefault = new pc.Color(i1043[8], i1043[9], i1043[10], i1043[11])
  i1042.colorSelected = new pc.Color(i1043[12], i1043[13], i1043[14], i1043[15])
  return i1042
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'nameLabel')
  request.r(i1045[2], i1045[3], 0, i1044, 'valueToggle')
  i1044.colorDefault = new pc.Color(i1045[4], i1045[5], i1045[6], i1045[7])
  i1044.colorSelected = new pc.Color(i1045[8], i1045[9], i1045[10], i1045[11])
  return i1044
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'nameLabel')
  i1046.colorDefault = new pc.Color(i1047[2], i1047[3], i1047[4], i1047[5])
  i1046.colorSelected = new pc.Color(i1047[6], i1047[7], i1047[8], i1047[9])
  return i1046
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'nameLabel')
  request.r(i1049[2], i1049[3], 0, i1048, 'valueLabel')
  request.r(i1049[4], i1049[5], 0, i1048, 'progressBarRect')
  i1048.colorDefault = new pc.Color(i1049[6], i1049[7], i1049[8], i1049[9])
  i1048.colorSelected = new pc.Color(i1049[10], i1049[11], i1049[12], i1049[13])
  return i1048
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'nameLabel')
  request.r(i1051[2], i1051[3], 0, i1050, 'valueLabel')
  i1050.colorDefault = new pc.Color(i1051[4], i1051[5], i1051[6], i1051[7])
  i1050.colorSelected = new pc.Color(i1051[8], i1051[9], i1051[10], i1051[11])
  return i1050
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'nameLabel')
  request.r(i1053[2], i1053[3], 0, i1052, 'valueLabel')
  i1052.colorDefault = new pc.Color(i1053[4], i1053[5], i1053[6], i1053[7])
  i1052.colorSelected = new pc.Color(i1053[8], i1053[9], i1053[10], i1053[11])
  return i1052
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i1054 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'nextButtonText')
  request.r(i1055[2], i1055[3], 0, i1054, 'previousButtonText')
  request.r(i1055[4], i1055[5], 0, i1054, 'nameLabel')
  request.r(i1055[6], i1055[7], 0, i1054, 'valueLabel')
  i1054.colorDefault = new pc.Color(i1055[8], i1055[9], i1055[10], i1055[11])
  i1054.colorSelected = new pc.Color(i1055[12], i1055[13], i1055[14], i1055[15])
  return i1054
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'nextButtonText')
  request.r(i1057[2], i1057[3], 0, i1056, 'previousButtonText')
  request.r(i1057[4], i1057[5], 0, i1056, 'nameLabel')
  request.r(i1057[6], i1057[7], 0, i1056, 'valueLabel')
  i1056.colorDefault = new pc.Color(i1057[8], i1057[9], i1057[10], i1057[11])
  i1056.colorSelected = new pc.Color(i1057[12], i1057[13], i1057[14], i1057[15])
  return i1056
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'panel')
  request.r(i1059[2], i1059[3], 0, i1058, 'valuePrefab')
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1061 = data
  i1060.AdditionalLightsPerObjectLimit = i1061[0]
  i1060.AdditionalLightsRenderingMode = i1061[1]
  i1060.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1061[2], i1060.LightRenderingMode)
  i1060.ColorGradingLutSize = i1061[3]
  i1060.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1061[4], i1060.ColorGradingMode)
  i1060.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1061[5], i1060.MainLightRenderingMode)
  i1060.MainLightRenderingModeValue = i1061[6]
  i1060.SupportsMainLightShadows = !!i1061[7]
  i1060.MixedLightingSupported = !!i1061[8]
  i1060.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1061[9], i1060.MsaaQuality)
  i1060.MSAA = i1061[10]
  i1060.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1061[11], i1060.OpaqueDownsampling)
  i1060.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i1061[12], i1060.MainLightShadowmapResolution)
  i1060.MainLightShadowmapResolutionValue = i1061[13]
  i1060.SupportsSoftShadows = !!i1061[14]
  i1060.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i1061[15], i1060.SoftShadowQuality)
  i1060.SoftShadowQualityValue = i1061[16]
  i1060.ShadowDistance = i1061[17]
  i1060.ShadowCascadeCount = i1061[18]
  i1060.Cascade2Split = i1061[19]
  i1060.Cascade3Split = new pc.Vec2( i1061[20], i1061[21] )
  i1060.Cascade4Split = new pc.Vec3( i1061[22], i1061[23], i1061[24] )
  i1060.CascadeBorder = i1061[25]
  i1060.ShadowDepthBias = i1061[26]
  i1060.ShadowNormalBias = i1061[27]
  i1060.RenderScale = i1061[28]
  i1060.RequireDepthTexture = !!i1061[29]
  i1060.RequireOpaqueTexture = !!i1061[30]
  i1060.SupportsHDR = !!i1061[31]
  i1060.SupportsTerrainHoles = !!i1061[32]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1063 = data
  i1062.Disabled = i1063[0]
  i1062.PerVertex = i1063[1]
  i1062.PerPixel = i1063[2]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1065 = data
  i1064.LowDynamicRange = i1065[0]
  i1064.HighDynamicRange = i1065[1]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1067 = data
  i1066.Disabled = i1067[0]
  i1066._2x = i1067[1]
  i1066._4x = i1067[2]
  i1066._8x = i1067[3]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1069 = data
  i1068.None = i1069[0]
  i1068._2xBilinear = i1069[1]
  i1068._4xBox = i1069[2]
  i1068._4xBilinear = i1069[3]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i1071 = data
  i1070._256 = i1071[0]
  i1070._512 = i1071[1]
  i1070._1024 = i1071[2]
  i1070._2048 = i1071[3]
  i1070._4096 = i1071[4]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i1073 = data
  i1072.UsePipelineSettings = i1073[0]
  i1072.Low = i1073[1]
  i1072.Medium = i1073[2]
  i1072.High = i1073[3]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1075 = data
  var i1077 = i1075[0]
  var i1076 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1077[i + 0]));
  }
  i1074.ShaderCompilationErrors = i1076
  i1074.name = i1075[1]
  i1074.guid = i1075[2]
  var i1079 = i1075[3]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( i1079[i + 0] );
  }
  i1074.shaderDefinedKeywords = i1078
  var i1081 = i1075[4]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1081[i + 0]) );
  }
  i1074.passes = i1080
  var i1083 = i1075[5]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1083[i + 0]) );
  }
  i1074.usePasses = i1082
  var i1085 = i1075[6]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1085[i + 0]) );
  }
  i1074.defaultParameterValues = i1084
  request.r(i1075[7], i1075[8], 0, i1074, 'unityFallbackShader')
  i1074.readDepth = !!i1075[9]
  i1074.isCreatedByShaderGraph = !!i1075[10]
  i1074.compiled = !!i1075[11]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1089 = data
  i1088.shaderName = i1089[0]
  i1088.errorMessage = i1089[1]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1094 = root || new pc.UnityShaderPass()
  var i1095 = data
  i1094.id = i1095[0]
  i1094.subShaderIndex = i1095[1]
  i1094.name = i1095[2]
  i1094.passType = i1095[3]
  i1094.grabPassTextureName = i1095[4]
  i1094.usePass = !!i1095[5]
  i1094.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[6], i1094.zTest)
  i1094.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[7], i1094.zWrite)
  i1094.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[8], i1094.culling)
  i1094.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1095[9], i1094.blending)
  i1094.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1095[10], i1094.alphaBlending)
  i1094.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[11], i1094.colorWriteMask)
  i1094.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[12], i1094.offsetUnits)
  i1094.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[13], i1094.offsetFactor)
  i1094.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[14], i1094.stencilRef)
  i1094.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[15], i1094.stencilReadMask)
  i1094.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[16], i1094.stencilWriteMask)
  i1094.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1095[17], i1094.stencilOp)
  i1094.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1095[18], i1094.stencilOpFront)
  i1094.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1095[19], i1094.stencilOpBack)
  var i1097 = i1095[20]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1097[i + 0]) );
  }
  i1094.tags = i1096
  var i1099 = i1095[21]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( i1099[i + 0] );
  }
  i1094.passDefinedKeywords = i1098
  var i1101 = i1095[22]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1101[i + 0]) );
  }
  i1094.passDefinedKeywordGroups = i1100
  var i1103 = i1095[23]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1103[i + 0]) );
  }
  i1094.variants = i1102
  var i1105 = i1095[24]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1105[i + 0]) );
  }
  i1094.excludedVariants = i1104
  i1094.hasDepthReader = !!i1095[25]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1107 = data
  i1106.val = i1107[0]
  i1106.name = i1107[1]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1109 = data
  i1108.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1109[0], i1108.src)
  i1108.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1109[1], i1108.dst)
  i1108.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1109[2], i1108.op)
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1111 = data
  i1110.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[0], i1110.pass)
  i1110.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[1], i1110.fail)
  i1110.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[2], i1110.zFail)
  i1110.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[3], i1110.comp)
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1115 = data
  i1114.name = i1115[0]
  i1114.value = i1115[1]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( i1121[i + 0] );
  }
  i1118.keywords = i1120
  i1118.hasDiscard = !!i1119[1]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1125 = data
  i1124.passId = i1125[0]
  i1124.subShaderIndex = i1125[1]
  var i1127 = i1125[2]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1124.keywords = i1126
  i1124.vertexProgram = i1125[3]
  i1124.fragmentProgram = i1125[4]
  i1124.exportedForWebGl2 = !!i1125[5]
  i1124.readDepth = !!i1125[6]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1131 = data
  request.r(i1131[0], i1131[1], 0, i1130, 'shader')
  i1130.pass = i1131[2]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1135 = data
  i1134.name = i1135[0]
  i1134.type = i1135[1]
  i1134.value = new pc.Vec4( i1135[2], i1135[3], i1135[4], i1135[5] )
  i1134.textureValue = i1135[6]
  i1134.shaderPropertyFlag = i1135[7]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1137 = data
  i1136.name = i1137[0]
  request.r(i1137[1], i1137[2], 0, i1136, 'texture')
  i1136.aabb = i1137[3]
  i1136.vertices = i1137[4]
  i1136.triangles = i1137[5]
  i1136.textureRect = UnityEngine.Rect.MinMaxRect(i1137[6], i1137[7], i1137[8], i1137[9])
  i1136.packedRect = UnityEngine.Rect.MinMaxRect(i1137[10], i1137[11], i1137[12], i1137[13])
  i1136.border = new pc.Vec4( i1137[14], i1137[15], i1137[16], i1137[17] )
  i1136.transparency = i1137[18]
  i1136.bounds = i1137[19]
  i1136.pixelsPerUnit = i1137[20]
  i1136.textureWidth = i1137[21]
  i1136.textureHeight = i1137[22]
  i1136.nativeSize = new pc.Vec2( i1137[23], i1137[24] )
  i1136.pivot = new pc.Vec2( i1137[25], i1137[26] )
  i1136.textureRectOffset = new pc.Vec2( i1137[27], i1137[28] )
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1139 = data
  i1138.name = i1139[0]
  i1138.ascent = i1139[1]
  i1138.originalLineHeight = i1139[2]
  i1138.fontSize = i1139[3]
  var i1141 = i1139[4]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1141[i + 0]) );
  }
  i1138.characterInfo = i1140
  request.r(i1139[5], i1139[6], 0, i1138, 'texture')
  i1138.originalFontSize = i1139[7]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1145 = data
  i1144.index = i1145[0]
  i1144.advance = i1145[1]
  i1144.bearing = i1145[2]
  i1144.glyphWidth = i1145[3]
  i1144.glyphHeight = i1145[4]
  i1144.minX = i1145[5]
  i1144.maxX = i1145[6]
  i1144.minY = i1145[7]
  i1144.maxY = i1145[8]
  i1144.uvBottomLeftX = i1145[9]
  i1144.uvBottomLeftY = i1145[10]
  i1144.uvBottomRightX = i1145[11]
  i1144.uvBottomRightY = i1145[12]
  i1144.uvTopLeftX = i1145[13]
  i1144.uvTopLeftY = i1145[14]
  i1144.uvTopRightX = i1145[15]
  i1144.uvTopRightY = i1145[16]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.bytes64 = i1147[1]
  i1146.data = i1147[2]
  return i1146
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1149 = data
  var i1151 = i1149[0]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1151.length; i += 2) {
  request.r(i1151[i + 0], i1151[i + 1], 1, i1150, '')
  }
  i1148.components = i1150
  return i1148
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1155 = data
  i1154.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1155[0], i1154.mode)
  i1154.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1155[1], i1154.neutralHDRRangeReductionMode)
  i1154.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1155[2], i1154.acesPreset)
  i1154.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1155[3], i1154.hueShiftAmount)
  i1154.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1155[4], i1154.detectPaperWhite)
  i1154.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1155[5], i1154.paperWhite)
  i1154.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1155[6], i1154.detectBrightnessLimits)
  i1154.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1155[7], i1154.minNits)
  i1154.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1155[8], i1154.maxNits)
  i1154.active = !!i1155[9]
  return i1154
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1157 = data
  i1156.m_Value = i1157[0]
  i1156.m_OverrideState = !!i1157[1]
  return i1156
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1159 = data
  i1158.m_Value = i1159[0]
  i1158.m_OverrideState = !!i1159[1]
  return i1158
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1161 = data
  i1160.m_Value = i1161[0]
  i1160.m_OverrideState = !!i1161[1]
  return i1160
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1162 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1163 = data
  i1162.m_Value = i1163[0]
  i1162.m_OverrideState = !!i1163[1]
  return i1162
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1165 = data
  i1164.m_Value = !!i1165[0]
  i1164.m_OverrideState = !!i1165[1]
  return i1164
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1167 = data
  i1166.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1167[0], i1166.skipIterations)
  i1166.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1167[1], i1166.threshold)
  i1166.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1167[2], i1166.intensity)
  i1166.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1167[3], i1166.scatter)
  i1166.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1167[4], i1166.clamp)
  i1166.tint = request.d('UnityEngine.Rendering.ColorParameter', i1167[5], i1166.tint)
  i1166.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1167[6], i1166.highQualityFiltering)
  i1166.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1167[7], i1166.downscale)
  i1166.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1167[8], i1166.maxIterations)
  i1166.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1167[9], i1166.dirtTexture)
  i1166.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1167[10], i1166.dirtIntensity)
  i1166.active = !!i1167[11]
  return i1166
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1169 = data
  i1168.m_Value = i1169[0]
  i1168.m_OverrideState = !!i1169[1]
  return i1168
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1171 = data
  i1170.m_Value = i1171[0]
  i1170.m_OverrideState = !!i1171[1]
  return i1170
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1172 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1173 = data
  i1172.m_Value = new pc.Color(i1173[0], i1173[1], i1173[2], i1173[3])
  i1172.m_OverrideState = !!i1173[4]
  return i1172
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1175 = data
  i1174.m_Value = i1175[0]
  i1174.m_OverrideState = !!i1175[1]
  return i1174
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1177 = data
  i1176.dimension = i1177[0]
  request.r(i1177[1], i1177[2], 0, i1176, 'm_Value')
  i1176.m_OverrideState = !!i1177[3]
  return i1176
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1179 = data
  i1178.color = request.d('UnityEngine.Rendering.ColorParameter', i1179[0], i1178.color)
  i1178.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1179[1], i1178.center)
  i1178.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1179[2], i1178.intensity)
  i1178.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1179[3], i1178.smoothness)
  i1178.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1179[4], i1178.rounded)
  i1178.active = !!i1179[5]
  return i1178
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1181 = data
  i1180.m_Value = new pc.Vec2( i1181[0], i1181[1] )
  i1180.m_OverrideState = !!i1181[2]
  return i1180
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1183 = data
  i1182.hashCode = i1183[0]
  request.r(i1183[1], i1183[2], 0, i1182, 'material')
  i1182.materialHashCode = i1183[3]
  request.r(i1183[4], i1183[5], 0, i1182, 'atlas')
  i1182.normalStyle = i1183[6]
  i1182.normalSpacingOffset = i1183[7]
  i1182.boldStyle = i1183[8]
  i1182.boldSpacing = i1183[9]
  i1182.italicStyle = i1183[10]
  i1182.tabSize = i1183[11]
  i1182.m_Version = i1183[12]
  i1182.m_SourceFontFileGUID = i1183[13]
  request.r(i1183[14], i1183[15], 0, i1182, 'm_SourceFontFile_EditorRef')
  request.r(i1183[16], i1183[17], 0, i1182, 'm_SourceFontFile')
  i1182.m_AtlasPopulationMode = i1183[18]
  i1182.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1183[19], i1182.m_FaceInfo)
  var i1185 = i1183[20]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('UnityEngine.TextCore.Glyph', i1185[i + 0]));
  }
  i1182.m_GlyphTable = i1184
  var i1187 = i1183[21]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.add(request.d('TMPro.TMP_Character', i1187[i + 0]));
  }
  i1182.m_CharacterTable = i1186
  var i1189 = i1183[22]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 2, i1188, '')
  }
  i1182.m_AtlasTextures = i1188
  i1182.m_AtlasTextureIndex = i1183[23]
  i1182.m_IsMultiAtlasTexturesEnabled = !!i1183[24]
  i1182.m_ClearDynamicDataOnBuild = !!i1183[25]
  var i1191 = i1183[26]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('UnityEngine.TextCore.GlyphRect', i1191[i + 0]));
  }
  i1182.m_UsedGlyphRects = i1190
  var i1193 = i1183[27]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('UnityEngine.TextCore.GlyphRect', i1193[i + 0]));
  }
  i1182.m_FreeGlyphRects = i1192
  i1182.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1183[28], i1182.m_fontInfo)
  i1182.m_AtlasWidth = i1183[29]
  i1182.m_AtlasHeight = i1183[30]
  i1182.m_AtlasPadding = i1183[31]
  i1182.m_AtlasRenderMode = i1183[32]
  var i1195 = i1183[33]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.add(request.d('TMPro.TMP_Glyph', i1195[i + 0]));
  }
  i1182.m_glyphInfoList = i1194
  i1182.m_KerningTable = request.d('TMPro.KerningTable', i1183[34], i1182.m_KerningTable)
  i1182.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1183[35], i1182.m_FontFeatureTable)
  var i1197 = i1183[36]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1197.length; i += 2) {
  request.r(i1197[i + 0], i1197[i + 1], 1, i1196, '')
  }
  i1182.fallbackFontAssets = i1196
  var i1199 = i1183[37]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1199.length; i += 2) {
  request.r(i1199[i + 0], i1199[i + 1], 1, i1198, '')
  }
  i1182.m_FallbackFontAssetTable = i1198
  i1182.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1183[38], i1182.m_CreationSettings)
  var i1201 = i1183[39]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('TMPro.TMP_FontWeightPair', i1201[i + 0]) );
  }
  i1182.m_FontWeightTable = i1200
  var i1203 = i1183[40]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('TMPro.TMP_FontWeightPair', i1203[i + 0]) );
  }
  i1182.fontWeights = i1202
  return i1182
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1204 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1205 = data
  i1204.m_FaceIndex = i1205[0]
  i1204.m_FamilyName = i1205[1]
  i1204.m_StyleName = i1205[2]
  i1204.m_PointSize = i1205[3]
  i1204.m_Scale = i1205[4]
  i1204.m_UnitsPerEM = i1205[5]
  i1204.m_LineHeight = i1205[6]
  i1204.m_AscentLine = i1205[7]
  i1204.m_CapLine = i1205[8]
  i1204.m_MeanLine = i1205[9]
  i1204.m_Baseline = i1205[10]
  i1204.m_DescentLine = i1205[11]
  i1204.m_SuperscriptOffset = i1205[12]
  i1204.m_SuperscriptSize = i1205[13]
  i1204.m_SubscriptOffset = i1205[14]
  i1204.m_SubscriptSize = i1205[15]
  i1204.m_UnderlineOffset = i1205[16]
  i1204.m_UnderlineThickness = i1205[17]
  i1204.m_StrikethroughOffset = i1205[18]
  i1204.m_StrikethroughThickness = i1205[19]
  i1204.m_TabWidth = i1205[20]
  return i1204
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1209 = data
  i1208.m_Index = i1209[0]
  i1208.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1209[1], i1208.m_Metrics)
  i1208.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1209[2], i1208.m_GlyphRect)
  i1208.m_Scale = i1209[3]
  i1208.m_AtlasIndex = i1209[4]
  i1208.m_ClassDefinitionType = i1209[5]
  return i1208
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1210 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1211 = data
  i1210.m_Width = i1211[0]
  i1210.m_Height = i1211[1]
  i1210.m_HorizontalBearingX = i1211[2]
  i1210.m_HorizontalBearingY = i1211[3]
  i1210.m_HorizontalAdvance = i1211[4]
  return i1210
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1212 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1213 = data
  i1212.m_X = i1213[0]
  i1212.m_Y = i1213[1]
  i1212.m_Width = i1213[2]
  i1212.m_Height = i1213[3]
  return i1212
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.TMP_Character' )
  var i1217 = data
  i1216.m_ElementType = i1217[0]
  i1216.m_Unicode = i1217[1]
  i1216.m_GlyphIndex = i1217[2]
  i1216.m_Scale = i1217[3]
  return i1216
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1223 = data
  i1222.Name = i1223[0]
  i1222.PointSize = i1223[1]
  i1222.Scale = i1223[2]
  i1222.CharacterCount = i1223[3]
  i1222.LineHeight = i1223[4]
  i1222.Baseline = i1223[5]
  i1222.Ascender = i1223[6]
  i1222.CapHeight = i1223[7]
  i1222.Descender = i1223[8]
  i1222.CenterLine = i1223[9]
  i1222.SuperscriptOffset = i1223[10]
  i1222.SubscriptOffset = i1223[11]
  i1222.SubSize = i1223[12]
  i1222.Underline = i1223[13]
  i1222.UnderlineThickness = i1223[14]
  i1222.strikethrough = i1223[15]
  i1222.strikethroughThickness = i1223[16]
  i1222.TabWidth = i1223[17]
  i1222.Padding = i1223[18]
  i1222.AtlasWidth = i1223[19]
  i1222.AtlasHeight = i1223[20]
  return i1222
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1227 = data
  i1226.id = i1227[0]
  i1226.x = i1227[1]
  i1226.y = i1227[2]
  i1226.width = i1227[3]
  i1226.height = i1227[4]
  i1226.xOffset = i1227[5]
  i1226.yOffset = i1227[6]
  i1226.xAdvance = i1227[7]
  i1226.scale = i1227[8]
  return i1226
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.KerningTable' )
  var i1229 = data
  var i1231 = i1229[0]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('TMPro.KerningPair', i1231[i + 0]));
  }
  i1228.kerningPairs = i1230
  return i1228
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.KerningPair' )
  var i1235 = data
  i1234.xOffset = i1235[0]
  i1234.m_FirstGlyph = i1235[1]
  i1234.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1235[2], i1234.m_FirstGlyphAdjustments)
  i1234.m_SecondGlyph = i1235[3]
  i1234.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1235[4], i1234.m_SecondGlyphAdjustments)
  i1234.m_IgnoreSpacingAdjustments = !!i1235[5]
  return i1234
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1237 = data
  var i1239 = i1237[0]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1239[i + 0]));
  }
  i1236.m_GlyphPairAdjustmentRecords = i1238
  return i1236
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1243 = data
  i1242.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1243[0], i1242.m_FirstAdjustmentRecord)
  i1242.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1243[1], i1242.m_SecondAdjustmentRecord)
  i1242.m_FeatureLookupFlags = i1243[2]
  return i1242
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1245 = data
  i1244.m_GlyphIndex = i1245[0]
  i1244.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1245[1], i1244.m_GlyphValueRecord)
  return i1244
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1247 = data
  i1246.m_XPlacement = i1247[0]
  i1246.m_YPlacement = i1247[1]
  i1246.m_XAdvance = i1247[2]
  i1246.m_YAdvance = i1247[3]
  return i1246
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1251 = data
  i1250.sourceFontFileName = i1251[0]
  i1250.sourceFontFileGUID = i1251[1]
  i1250.pointSizeSamplingMode = i1251[2]
  i1250.pointSize = i1251[3]
  i1250.padding = i1251[4]
  i1250.packingMode = i1251[5]
  i1250.atlasWidth = i1251[6]
  i1250.atlasHeight = i1251[7]
  i1250.characterSetSelectionMode = i1251[8]
  i1250.characterSequence = i1251[9]
  i1250.referencedFontAssetGUID = i1251[10]
  i1250.referencedTextAssetGUID = i1251[11]
  i1250.fontStyle = i1251[12]
  i1250.fontStyleModifier = i1251[13]
  i1250.renderMode = i1251[14]
  i1250.includeFontFeatures = !!i1251[15]
  return i1250
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1255 = data
  request.r(i1255[0], i1255[1], 0, i1254, 'regularTypeface')
  request.r(i1255[2], i1255[3], 0, i1254, 'italicTypeface')
  return i1254
}

Deserializers["CaseDatabase"] = function (request, data, root) {
  var i1256 = root || request.c( 'CaseDatabase' )
  var i1257 = data
  var i1259 = i1257[0]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i1259.length; i += 2) {
  request.r(i1259[i + 0], i1259[i + 1], 1, i1258, '')
  }
  i1256.caseMaterialList = i1258
  return i1256
}

Deserializers["GoodsDatabase"] = function (request, data, root) {
  var i1262 = root || request.c( 'GoodsDatabase' )
  var i1263 = data
  var i1265 = i1263[0]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i1265.length; i += 2) {
  request.r(i1265[i + 0], i1265[i + 1], 1, i1264, '')
  }
  i1262.goodsMaterialList = i1264
  return i1262
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1266 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1267 = data
  i1266.useSafeMode = !!i1267[0]
  i1266.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1267[1], i1266.safeModeOptions)
  i1266.timeScale = i1267[2]
  i1266.unscaledTimeScale = i1267[3]
  i1266.useSmoothDeltaTime = !!i1267[4]
  i1266.maxSmoothUnscaledTime = i1267[5]
  i1266.rewindCallbackMode = i1267[6]
  i1266.showUnityEditorReport = !!i1267[7]
  i1266.logBehaviour = i1267[8]
  i1266.drawGizmos = !!i1267[9]
  i1266.defaultRecyclable = !!i1267[10]
  i1266.defaultAutoPlay = i1267[11]
  i1266.defaultUpdateType = i1267[12]
  i1266.defaultTimeScaleIndependent = !!i1267[13]
  i1266.defaultEaseType = i1267[14]
  i1266.defaultEaseOvershootOrAmplitude = i1267[15]
  i1266.defaultEasePeriod = i1267[16]
  i1266.defaultAutoKill = !!i1267[17]
  i1266.defaultLoopType = i1267[18]
  i1266.debugMode = !!i1267[19]
  i1266.debugStoreTargetId = !!i1267[20]
  i1266.showPreviewPanel = !!i1267[21]
  i1266.storeSettingsLocation = i1267[22]
  i1266.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1267[23], i1266.modules)
  i1266.createASMDEF = !!i1267[24]
  i1266.showPlayingTweens = !!i1267[25]
  i1266.showPausedTweens = !!i1267[26]
  return i1266
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1268 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1269 = data
  i1268.logBehaviour = i1269[0]
  i1268.nestedTweenFailureBehaviour = i1269[1]
  return i1268
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1270 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1271 = data
  i1270.showPanel = !!i1271[0]
  i1270.audioEnabled = !!i1271[1]
  i1270.physicsEnabled = !!i1271[2]
  i1270.physics2DEnabled = !!i1271[3]
  i1270.spriteEnabled = !!i1271[4]
  i1270.uiEnabled = !!i1271[5]
  i1270.textMeshProEnabled = !!i1271[6]
  i1270.tk2DEnabled = !!i1271[7]
  i1270.deAudioEnabled = !!i1271[8]
  i1270.deUnityExtendedEnabled = !!i1271[9]
  i1270.epoOutlineEnabled = !!i1271[10]
  return i1270
}

Deserializers["UnityEditor.Rendering.Universal.AssetVersion"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEditor.Rendering.Universal.AssetVersion' )
  var i1273 = data
  i1272.version = i1273[0]
  return i1272
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1275 = data
  i1274.hashCode = i1275[0]
  request.r(i1275[1], i1275[2], 0, i1274, 'material')
  i1274.materialHashCode = i1275[3]
  request.r(i1275[4], i1275[5], 0, i1274, 'spriteSheet')
  var i1277 = i1275[6]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.TMP_Sprite', i1277[i + 0]));
  }
  i1274.spriteInfoList = i1276
  var i1279 = i1275[7]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1279.length; i += 2) {
  request.r(i1279[i + 0], i1279[i + 1], 1, i1278, '')
  }
  i1274.fallbackSpriteAssets = i1278
  i1274.m_Version = i1275[8]
  i1274.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1275[9], i1274.m_FaceInfo)
  var i1281 = i1275[10]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.add(request.d('TMPro.TMP_SpriteCharacter', i1281[i + 0]));
  }
  i1274.m_SpriteCharacterTable = i1280
  var i1283 = i1275[11]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(request.d('TMPro.TMP_SpriteGlyph', i1283[i + 0]));
  }
  i1274.m_SpriteGlyphTable = i1282
  return i1274
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1287 = data
  i1286.name = i1287[0]
  i1286.hashCode = i1287[1]
  i1286.unicode = i1287[2]
  i1286.pivot = new pc.Vec2( i1287[3], i1287[4] )
  request.r(i1287[5], i1287[6], 0, i1286, 'sprite')
  i1286.id = i1287[7]
  i1286.x = i1287[8]
  i1286.y = i1287[9]
  i1286.width = i1287[10]
  i1286.height = i1287[11]
  i1286.xOffset = i1287[12]
  i1286.yOffset = i1287[13]
  i1286.xAdvance = i1287[14]
  i1286.scale = i1287[15]
  return i1286
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1292 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1293 = data
  i1292.m_Name = i1293[0]
  i1292.m_HashCode = i1293[1]
  i1292.m_ElementType = i1293[2]
  i1292.m_Unicode = i1293[3]
  i1292.m_GlyphIndex = i1293[4]
  i1292.m_Scale = i1293[5]
  return i1292
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1297 = data
  request.r(i1297[0], i1297[1], 0, i1296, 'sprite')
  i1296.m_Index = i1297[2]
  i1296.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1297[3], i1296.m_Metrics)
  i1296.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1297[4], i1296.m_GlyphRect)
  i1296.m_Scale = i1297[5]
  i1296.m_AtlasIndex = i1297[6]
  i1296.m_ClassDefinitionType = i1297[7]
  return i1296
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1299 = data
  var i1301 = i1299[0]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.add(request.d('TMPro.TMP_Style', i1301[i + 0]));
  }
  i1298.m_StyleList = i1300
  return i1298
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_Style' )
  var i1305 = data
  i1304.m_Name = i1305[0]
  i1304.m_HashCode = i1305[1]
  i1304.m_OpeningDefinition = i1305[2]
  i1304.m_ClosingDefinition = i1305[3]
  i1304.m_OpeningTagArray = i1305[4]
  i1304.m_ClosingTagArray = i1305[5]
  i1304.m_OpeningTagUnicodeArray = i1305[6]
  i1304.m_ClosingTagUnicodeArray = i1305[7]
  return i1304
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.TMP_Settings' )
  var i1307 = data
  i1306.m_enableWordWrapping = !!i1307[0]
  i1306.m_enableKerning = !!i1307[1]
  i1306.m_enableExtraPadding = !!i1307[2]
  i1306.m_enableTintAllSprites = !!i1307[3]
  i1306.m_enableParseEscapeCharacters = !!i1307[4]
  i1306.m_EnableRaycastTarget = !!i1307[5]
  i1306.m_GetFontFeaturesAtRuntime = !!i1307[6]
  i1306.m_missingGlyphCharacter = i1307[7]
  i1306.m_warningsDisabled = !!i1307[8]
  request.r(i1307[9], i1307[10], 0, i1306, 'm_defaultFontAsset')
  i1306.m_defaultFontAssetPath = i1307[11]
  i1306.m_defaultFontSize = i1307[12]
  i1306.m_defaultAutoSizeMinRatio = i1307[13]
  i1306.m_defaultAutoSizeMaxRatio = i1307[14]
  i1306.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1307[15], i1307[16] )
  i1306.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1307[17], i1307[18] )
  i1306.m_autoSizeTextContainer = !!i1307[19]
  i1306.m_IsTextObjectScaleStatic = !!i1307[20]
  var i1309 = i1307[21]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1309.length; i += 2) {
  request.r(i1309[i + 0], i1309[i + 1], 1, i1308, '')
  }
  i1306.m_fallbackFontAssets = i1308
  i1306.m_matchMaterialPreset = !!i1307[22]
  request.r(i1307[23], i1307[24], 0, i1306, 'm_defaultSpriteAsset')
  i1306.m_defaultSpriteAssetPath = i1307[25]
  i1306.m_enableEmojiSupport = !!i1307[26]
  i1306.m_MissingCharacterSpriteUnicode = i1307[27]
  i1306.m_defaultColorGradientPresetsPath = i1307[28]
  request.r(i1307[29], i1307[30], 0, i1306, 'm_defaultStyleSheet')
  i1306.m_StyleSheetsResourcePath = i1307[31]
  request.r(i1307[32], i1307[33], 0, i1306, 'm_leadingCharacters')
  request.r(i1307[34], i1307[35], 0, i1306, 'm_followingCharacters')
  i1306.m_UseModernHangulLineBreakingRules = !!i1307[36]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1311 = data
  var i1313 = i1311[0]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1313[i + 0]) );
  }
  i1310.files = i1312
  i1310.componentToPrefabIds = i1311[1]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1317 = data
  i1316.path = i1317[0]
  request.r(i1317[1], i1317[2], 0, i1316, 'unityObject')
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1319 = data
  var i1321 = i1319[0]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1321[i + 0]) );
  }
  i1318.scriptsExecutionOrder = i1320
  var i1323 = i1319[1]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1323[i + 0]) );
  }
  i1318.sortingLayers = i1322
  var i1325 = i1319[2]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1325[i + 0]) );
  }
  i1318.cullingLayers = i1324
  i1318.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1319[3], i1318.timeSettings)
  i1318.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1319[4], i1318.physicsSettings)
  i1318.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1319[5], i1318.physics2DSettings)
  i1318.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1319[6], i1318.qualitySettings)
  i1318.enableRealtimeShadows = !!i1319[7]
  i1318.enableAutoInstancing = !!i1319[8]
  i1318.enableDynamicBatching = !!i1319[9]
  i1318.lightmapEncodingQuality = i1319[10]
  i1318.desiredColorSpace = i1319[11]
  var i1327 = i1319[12]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( i1327[i + 0] );
  }
  i1318.allTags = i1326
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1331 = data
  i1330.name = i1331[0]
  i1330.value = i1331[1]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1335 = data
  i1334.id = i1335[0]
  i1334.name = i1335[1]
  i1334.value = i1335[2]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1339 = data
  i1338.id = i1339[0]
  i1338.name = i1339[1]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1341 = data
  i1340.fixedDeltaTime = i1341[0]
  i1340.maximumDeltaTime = i1341[1]
  i1340.timeScale = i1341[2]
  i1340.maximumParticleTimestep = i1341[3]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1343 = data
  i1342.gravity = new pc.Vec3( i1343[0], i1343[1], i1343[2] )
  i1342.defaultSolverIterations = i1343[3]
  i1342.bounceThreshold = i1343[4]
  i1342.autoSyncTransforms = !!i1343[5]
  i1342.autoSimulation = !!i1343[6]
  var i1345 = i1343[7]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1345[i + 0]) );
  }
  i1342.collisionMatrix = i1344
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1349 = data
  i1348.enabled = !!i1349[0]
  i1348.layerId = i1349[1]
  i1348.otherLayerId = i1349[2]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1351 = data
  request.r(i1351[0], i1351[1], 0, i1350, 'material')
  i1350.gravity = new pc.Vec2( i1351[2], i1351[3] )
  i1350.positionIterations = i1351[4]
  i1350.velocityIterations = i1351[5]
  i1350.velocityThreshold = i1351[6]
  i1350.maxLinearCorrection = i1351[7]
  i1350.maxAngularCorrection = i1351[8]
  i1350.maxTranslationSpeed = i1351[9]
  i1350.maxRotationSpeed = i1351[10]
  i1350.baumgarteScale = i1351[11]
  i1350.baumgarteTOIScale = i1351[12]
  i1350.timeToSleep = i1351[13]
  i1350.linearSleepTolerance = i1351[14]
  i1350.angularSleepTolerance = i1351[15]
  i1350.defaultContactOffset = i1351[16]
  i1350.autoSimulation = !!i1351[17]
  i1350.queriesHitTriggers = !!i1351[18]
  i1350.queriesStartInColliders = !!i1351[19]
  i1350.callbacksOnDisable = !!i1351[20]
  i1350.reuseCollisionCallbacks = !!i1351[21]
  i1350.autoSyncTransforms = !!i1351[22]
  var i1353 = i1351[23]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1353[i + 0]) );
  }
  i1350.collisionMatrix = i1352
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1357 = data
  i1356.enabled = !!i1357[0]
  i1356.layerId = i1357[1]
  i1356.otherLayerId = i1357[2]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1359 = data
  var i1361 = i1359[0]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1361[i + 0]) );
  }
  i1358.qualityLevels = i1360
  var i1363 = i1359[1]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( i1363[i + 0] );
  }
  i1358.names = i1362
  i1358.shadows = i1359[2]
  i1358.anisotropicFiltering = i1359[3]
  i1358.antiAliasing = i1359[4]
  i1358.lodBias = i1359[5]
  i1358.shadowCascades = i1359[6]
  i1358.shadowDistance = i1359[7]
  i1358.shadowmaskMode = i1359[8]
  i1358.shadowProjection = i1359[9]
  i1358.shadowResolution = i1359[10]
  i1358.softParticles = !!i1359[11]
  i1358.softVegetation = !!i1359[12]
  i1358.activeColorSpace = i1359[13]
  i1358.desiredColorSpace = i1359[14]
  i1358.masterTextureLimit = i1359[15]
  i1358.maxQueuedFrames = i1359[16]
  i1358.particleRaycastBudget = i1359[17]
  i1358.pixelLightCount = i1359[18]
  i1358.realtimeReflectionProbes = !!i1359[19]
  i1358.shadowCascade2Split = i1359[20]
  i1358.shadowCascade4Split = new pc.Vec3( i1359[21], i1359[22], i1359[23] )
  i1358.streamingMipmapsActive = !!i1359[24]
  i1358.vSyncCount = i1359[25]
  i1358.asyncUploadBufferSize = i1359[26]
  i1358.asyncUploadTimeSlice = i1359[27]
  i1358.billboardsFaceCameraPosition = !!i1359[28]
  i1358.shadowNearPlaneOffset = i1359[29]
  i1358.streamingMipmapsMemoryBudget = i1359[30]
  i1358.maximumLODLevel = i1359[31]
  i1358.streamingMipmapsAddAllCameras = !!i1359[32]
  i1358.streamingMipmapsMaxLevelReduction = i1359[33]
  i1358.streamingMipmapsRenderersPerFrame = i1359[34]
  i1358.resolutionScalingFixedDPIFactor = i1359[35]
  i1358.streamingMipmapsMaxFileIORequests = i1359[36]
  i1358.currentQualityLevel = i1359[37]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1369 = data
  i1368.weight = i1369[0]
  i1368.vertices = i1369[1]
  i1368.normals = i1369[2]
  i1368.tangents = i1369[3]
  return i1368
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1371 = data
  i1370.xPlacement = i1371[0]
  i1370.yPlacement = i1371[1]
  i1370.xAdvance = i1371[2]
  i1370.yAdvance = i1371[3]
  return i1370
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"98":[99],"100":[99],"101":[99],"102":[99],"103":[99],"104":[99],"105":[106],"107":[19],"108":[10],"109":[10],"110":[10],"111":[10],"112":[10],"113":[10],"114":[10],"115":[116],"117":[116],"118":[116],"119":[116],"120":[116],"121":[116],"122":[116],"123":[116],"124":[116],"125":[116],"126":[116],"127":[116],"128":[116],"129":[19],"130":[5],"131":[132],"133":[132],"29":[13],"18":[16,14,13],"66":[13],"134":[19],"21":[19],"24":[23],"135":[136],"137":[13],"138":[13],"31":[29],"32":[16,13],"139":[13],"30":[29],"46":[13],"140":[13],"73":[13],"141":[13],"51":[13],"142":[13],"45":[13],"55":[13],"143":[13],"144":[16,13],"145":[13],"54":[13],"50":[13],"146":[13],"49":[16,13],"59":[13],"147":[27],"148":[27],"28":[27],"149":[27],"150":[19],"22":[19],"151":[136],"152":[13],"153":[5,13],"34":[13,16],"154":[13],"155":[16,13],"156":[5],"157":[16,13],"158":[13],"159":[136]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Goods","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.Rendering.SortingGroup","Case","UnityEngine.RectTransform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UIManager","UnityEngine.GameObject","GameManager","CaseDatabase","GoodsDatabase","EffectManager","UnityEngine.AudioSource","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","UnityEditor.Rendering.Universal.AssetVersion","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.TextAsset","UnityEditor.ShaderInclude","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/08/2025 13:02:21";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "lepo3-naver-com";

Deserializers.lunaAppID = "31170";

Deserializers.projectId = "1ea3bb43f778449c78ecaf64beaf075a";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1742";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4341";

Deserializers.runtimeAnalysisExcludedModules = "mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.Playable-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "16e9b518-af70-4bf1-8f08-74b895160339";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

