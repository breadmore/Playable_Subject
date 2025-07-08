var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.JointSpring' )
  var i1795 = data
  i1794.spring = i1795[0]
  i1794.damper = i1795[1]
  i1794.targetPosition = i1795[2]
  return i1794
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.JointMotor' )
  var i1797 = data
  i1796.m_TargetVelocity = i1797[0]
  i1796.m_Force = i1797[1]
  i1796.m_FreeSpin = i1797[2]
  return i1796
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.JointLimits' )
  var i1799 = data
  i1798.m_Min = i1799[0]
  i1798.m_Max = i1799[1]
  i1798.m_Bounciness = i1799[2]
  i1798.m_BounceMinVelocity = i1799[3]
  i1798.m_ContactDistance = i1799[4]
  i1798.minBounce = i1799[5]
  i1798.maxBounce = i1799[6]
  return i1798
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.JointDrive' )
  var i1801 = data
  i1800.m_PositionSpring = i1801[0]
  i1800.m_PositionDamper = i1801[1]
  i1800.m_MaximumForce = i1801[2]
  i1800.m_UseAcceleration = i1801[3]
  return i1800
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1803 = data
  i1802.m_Spring = i1803[0]
  i1802.m_Damper = i1803[1]
  return i1802
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1805 = data
  i1804.m_Limit = i1805[0]
  i1804.m_Bounciness = i1805[1]
  i1804.m_ContactDistance = i1805[2]
  return i1804
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1807 = data
  i1806.m_ExtremumSlip = i1807[0]
  i1806.m_ExtremumValue = i1807[1]
  i1806.m_AsymptoteSlip = i1807[2]
  i1806.m_AsymptoteValue = i1807[3]
  i1806.m_Stiffness = i1807[4]
  return i1806
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1809 = data
  i1808.m_LowerAngle = i1809[0]
  i1808.m_UpperAngle = i1809[1]
  return i1808
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1811 = data
  i1810.m_MotorSpeed = i1811[0]
  i1810.m_MaximumMotorTorque = i1811[1]
  return i1810
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1813 = data
  i1812.m_DampingRatio = i1813[0]
  i1812.m_Frequency = i1813[1]
  i1812.m_Angle = i1813[2]
  return i1812
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1814 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1815 = data
  i1814.m_LowerTranslation = i1815[0]
  i1814.m_UpperTranslation = i1815[1]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1817 = data
  i1816.name = i1817[0]
  i1816.width = i1817[1]
  i1816.height = i1817[2]
  i1816.mipmapCount = i1817[3]
  i1816.anisoLevel = i1817[4]
  i1816.filterMode = i1817[5]
  i1816.hdr = !!i1817[6]
  i1816.format = i1817[7]
  i1816.wrapMode = i1817[8]
  i1816.alphaIsTransparency = !!i1817[9]
  i1816.alphaSource = i1817[10]
  i1816.graphicsFormat = i1817[11]
  i1816.sRGBTexture = !!i1817[12]
  i1816.desiredColorSpace = i1817[13]
  i1816.wrapU = i1817[14]
  i1816.wrapV = i1817[15]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1818 = root || new pc.UnityMaterial()
  var i1819 = data
  i1818.name = i1819[0]
  request.r(i1819[1], i1819[2], 0, i1818, 'shader')
  i1818.renderQueue = i1819[3]
  i1818.enableInstancing = !!i1819[4]
  var i1821 = i1819[5]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1821[i + 0]) );
  }
  i1818.floatParameters = i1820
  var i1823 = i1819[6]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1823[i + 0]) );
  }
  i1818.colorParameters = i1822
  var i1825 = i1819[7]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1825[i + 0]) );
  }
  i1818.vectorParameters = i1824
  var i1827 = i1819[8]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1827[i + 0]) );
  }
  i1818.textureParameters = i1826
  var i1829 = i1819[9]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1829[i + 0]) );
  }
  i1818.materialFlags = i1828
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1833 = data
  i1832.name = i1833[0]
  i1832.value = i1833[1]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1837 = data
  i1836.name = i1837[0]
  i1836.value = new pc.Color(i1837[1], i1837[2], i1837[3], i1837[4])
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1841 = data
  i1840.name = i1841[0]
  i1840.value = new pc.Vec4( i1841[1], i1841[2], i1841[3], i1841[4] )
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1845 = data
  i1844.name = i1845[0]
  request.r(i1845[1], i1845[2], 0, i1844, 'value')
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1849 = data
  i1848.name = i1849[0]
  i1848.enabled = !!i1849[1]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1851 = data
  i1850.position = new pc.Vec3( i1851[0], i1851[1], i1851[2] )
  i1850.scale = new pc.Vec3( i1851[3], i1851[4], i1851[5] )
  i1850.rotation = new pc.Quat(i1851[6], i1851[7], i1851[8], i1851[9])
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1853 = data
  request.r(i1853[0], i1853[1], 0, i1852, 'sharedMesh')
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1855 = data
  request.r(i1855[0], i1855[1], 0, i1854, 'additionalVertexStreams')
  i1854.enabled = !!i1855[2]
  request.r(i1855[3], i1855[4], 0, i1854, 'sharedMaterial')
  var i1857 = i1855[5]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 2) {
  request.r(i1857[i + 0], i1857[i + 1], 2, i1856, '')
  }
  i1854.sharedMaterials = i1856
  i1854.receiveShadows = !!i1855[6]
  i1854.shadowCastingMode = i1855[7]
  i1854.sortingLayerID = i1855[8]
  i1854.sortingOrder = i1855[9]
  i1854.lightmapIndex = i1855[10]
  i1854.lightmapSceneIndex = i1855[11]
  i1854.lightmapScaleOffset = new pc.Vec4( i1855[12], i1855[13], i1855[14], i1855[15] )
  i1854.lightProbeUsage = i1855[16]
  i1854.reflectionProbeUsage = i1855[17]
  return i1854
}

Deserializers["Goods"] = function (request, data, root) {
  var i1860 = root || request.c( 'Goods' )
  var i1861 = data
  i1860.startPosition = new pc.Vec3( i1861[0], i1861[1], i1861[2] )
  request.r(i1861[3], i1861[4], 0, i1860, 'currentCase')
  i1860.originLayer = i1861[5]
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1863 = data
  i1862.center = new pc.Vec3( i1863[0], i1863[1], i1863[2] )
  i1862.size = new pc.Vec3( i1863[3], i1863[4], i1863[5] )
  i1862.enabled = !!i1863[6]
  i1862.isTrigger = !!i1863[7]
  request.r(i1863[8], i1863[9], 0, i1862, 'material')
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1865 = data
  i1864.mass = i1865[0]
  i1864.drag = i1865[1]
  i1864.angularDrag = i1865[2]
  i1864.useGravity = !!i1865[3]
  i1864.isKinematic = !!i1865[4]
  i1864.constraints = i1865[5]
  i1864.maxAngularVelocity = i1865[6]
  i1864.collisionDetectionMode = i1865[7]
  i1864.interpolation = i1865[8]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1867 = data
  i1866.enabled = !!i1867[0]
  i1866.sortingLayerIndex = i1867[1]
  i1866.sortingOrder = i1867[2]
  i1866.sortingLayerName = i1867[3]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1869 = data
  i1868.name = i1869[0]
  i1868.tagId = i1869[1]
  i1868.enabled = !!i1869[2]
  i1868.isStatic = !!i1869[3]
  i1868.layer = i1869[4]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1871 = data
  i1870.name = i1871[0]
  i1870.halfPrecision = !!i1871[1]
  i1870.useUInt32IndexFormat = !!i1871[2]
  i1870.vertexCount = i1871[3]
  i1870.aabb = i1871[4]
  var i1873 = i1871[5]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( !!i1873[i + 0] );
  }
  i1870.streams = i1872
  i1870.vertices = i1871[6]
  var i1875 = i1871[7]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1875[i + 0]) );
  }
  i1870.subMeshes = i1874
  var i1877 = i1871[8]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 16) {
    i1876.push( new pc.Mat4().setData(i1877[i + 0], i1877[i + 1], i1877[i + 2], i1877[i + 3],  i1877[i + 4], i1877[i + 5], i1877[i + 6], i1877[i + 7],  i1877[i + 8], i1877[i + 9], i1877[i + 10], i1877[i + 11],  i1877[i + 12], i1877[i + 13], i1877[i + 14], i1877[i + 15]) );
  }
  i1870.bindposes = i1876
  var i1879 = i1871[9]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1879[i + 0]) );
  }
  i1870.blendShapes = i1878
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1885 = data
  i1884.triangles = i1885[0]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1891 = data
  i1890.name = i1891[0]
  var i1893 = i1891[1]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1893[i + 0]) );
  }
  i1890.frames = i1892
  return i1890
}

Deserializers["Case"] = function (request, data, root) {
  var i1894 = root || request.c( 'Case' )
  var i1895 = data
  request.r(i1895[0], i1895[1], 0, i1894, 'goodsPosition')
  request.r(i1895[2], i1895[3], 0, i1894, 'currentGoods')
  i1894.currentLayer = i1895[4]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1897 = data
  i1896.pivot = new pc.Vec2( i1897[0], i1897[1] )
  i1896.anchorMin = new pc.Vec2( i1897[2], i1897[3] )
  i1896.anchorMax = new pc.Vec2( i1897[4], i1897[5] )
  i1896.sizeDelta = new pc.Vec2( i1897[6], i1897[7] )
  i1896.anchoredPosition3D = new pc.Vec3( i1897[8], i1897[9], i1897[10] )
  i1896.rotation = new pc.Quat(i1897[11], i1897[12], i1897[13], i1897[14])
  i1896.scale = new pc.Vec3( i1897[15], i1897[16], i1897[17] )
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1899 = data
  i1898.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1899[0], i1898.main)
  i1898.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1899[1], i1898.colorBySpeed)
  i1898.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1899[2], i1898.colorOverLifetime)
  i1898.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1899[3], i1898.emission)
  i1898.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1899[4], i1898.rotationBySpeed)
  i1898.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1899[5], i1898.rotationOverLifetime)
  i1898.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1899[6], i1898.shape)
  i1898.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1899[7], i1898.sizeBySpeed)
  i1898.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1899[8], i1898.sizeOverLifetime)
  i1898.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1899[9], i1898.textureSheetAnimation)
  i1898.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1899[10], i1898.velocityOverLifetime)
  i1898.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1899[11], i1898.noise)
  i1898.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1899[12], i1898.inheritVelocity)
  i1898.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1899[13], i1898.forceOverLifetime)
  i1898.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1899[14], i1898.limitVelocityOverLifetime)
  i1898.useAutoRandomSeed = !!i1899[15]
  i1898.randomSeed = i1899[16]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1900 = root || new pc.ParticleSystemMain()
  var i1901 = data
  i1900.duration = i1901[0]
  i1900.loop = !!i1901[1]
  i1900.prewarm = !!i1901[2]
  i1900.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[3], i1900.startDelay)
  i1900.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[4], i1900.startLifetime)
  i1900.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[5], i1900.startSpeed)
  i1900.startSize3D = !!i1901[6]
  i1900.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[7], i1900.startSizeX)
  i1900.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[8], i1900.startSizeY)
  i1900.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[9], i1900.startSizeZ)
  i1900.startRotation3D = !!i1901[10]
  i1900.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[11], i1900.startRotationX)
  i1900.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[12], i1900.startRotationY)
  i1900.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[13], i1900.startRotationZ)
  i1900.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1901[14], i1900.startColor)
  i1900.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[15], i1900.gravityModifier)
  i1900.simulationSpace = i1901[16]
  request.r(i1901[17], i1901[18], 0, i1900, 'customSimulationSpace')
  i1900.simulationSpeed = i1901[19]
  i1900.useUnscaledTime = !!i1901[20]
  i1900.scalingMode = i1901[21]
  i1900.playOnAwake = !!i1901[22]
  i1900.maxParticles = i1901[23]
  i1900.emitterVelocityMode = i1901[24]
  i1900.stopAction = i1901[25]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1902 = root || new pc.MinMaxCurve()
  var i1903 = data
  i1902.mode = i1903[0]
  i1902.curveMin = new pc.AnimationCurve( { keys_flow: i1903[1] } )
  i1902.curveMax = new pc.AnimationCurve( { keys_flow: i1903[2] } )
  i1902.curveMultiplier = i1903[3]
  i1902.constantMin = i1903[4]
  i1902.constantMax = i1903[5]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1904 = root || new pc.MinMaxGradient()
  var i1905 = data
  i1904.mode = i1905[0]
  i1904.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1905[1], i1904.gradientMin)
  i1904.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1905[2], i1904.gradientMax)
  i1904.colorMin = new pc.Color(i1905[3], i1905[4], i1905[5], i1905[6])
  i1904.colorMax = new pc.Color(i1905[7], i1905[8], i1905[9], i1905[10])
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1907 = data
  i1906.mode = i1907[0]
  var i1909 = i1907[1]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1909[i + 0]) );
  }
  i1906.colorKeys = i1908
  var i1911 = i1907[2]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1911[i + 0]) );
  }
  i1906.alphaKeys = i1910
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1912 = root || new pc.ParticleSystemColorBySpeed()
  var i1913 = data
  i1912.enabled = !!i1913[0]
  i1912.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1913[1], i1912.color)
  i1912.range = new pc.Vec2( i1913[2], i1913[3] )
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1917 = data
  i1916.color = new pc.Color(i1917[0], i1917[1], i1917[2], i1917[3])
  i1916.time = i1917[4]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1921 = data
  i1920.alpha = i1921[0]
  i1920.time = i1921[1]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1922 = root || new pc.ParticleSystemColorOverLifetime()
  var i1923 = data
  i1922.enabled = !!i1923[0]
  i1922.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1923[1], i1922.color)
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1924 = root || new pc.ParticleSystemEmitter()
  var i1925 = data
  i1924.enabled = !!i1925[0]
  i1924.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[1], i1924.rateOverTime)
  i1924.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[2], i1924.rateOverDistance)
  var i1927 = i1925[3]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1927[i + 0]) );
  }
  i1924.bursts = i1926
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1930 = root || new pc.ParticleSystemBurst()
  var i1931 = data
  i1930.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1931[0], i1930.count)
  i1930.cycleCount = i1931[1]
  i1930.minCount = i1931[2]
  i1930.maxCount = i1931[3]
  i1930.repeatInterval = i1931[4]
  i1930.time = i1931[5]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1932 = root || new pc.ParticleSystemRotationBySpeed()
  var i1933 = data
  i1932.enabled = !!i1933[0]
  i1932.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[1], i1932.x)
  i1932.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[2], i1932.y)
  i1932.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[3], i1932.z)
  i1932.separateAxes = !!i1933[4]
  i1932.range = new pc.Vec2( i1933[5], i1933[6] )
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1934 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1935 = data
  i1934.enabled = !!i1935[0]
  i1934.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[1], i1934.x)
  i1934.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[2], i1934.y)
  i1934.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[3], i1934.z)
  i1934.separateAxes = !!i1935[4]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1936 = root || new pc.ParticleSystemShape()
  var i1937 = data
  i1936.enabled = !!i1937[0]
  i1936.shapeType = i1937[1]
  i1936.randomDirectionAmount = i1937[2]
  i1936.sphericalDirectionAmount = i1937[3]
  i1936.randomPositionAmount = i1937[4]
  i1936.alignToDirection = !!i1937[5]
  i1936.radius = i1937[6]
  i1936.radiusMode = i1937[7]
  i1936.radiusSpread = i1937[8]
  i1936.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[9], i1936.radiusSpeed)
  i1936.radiusThickness = i1937[10]
  i1936.angle = i1937[11]
  i1936.length = i1937[12]
  i1936.boxThickness = new pc.Vec3( i1937[13], i1937[14], i1937[15] )
  i1936.meshShapeType = i1937[16]
  request.r(i1937[17], i1937[18], 0, i1936, 'mesh')
  request.r(i1937[19], i1937[20], 0, i1936, 'meshRenderer')
  request.r(i1937[21], i1937[22], 0, i1936, 'skinnedMeshRenderer')
  i1936.useMeshMaterialIndex = !!i1937[23]
  i1936.meshMaterialIndex = i1937[24]
  i1936.useMeshColors = !!i1937[25]
  i1936.normalOffset = i1937[26]
  i1936.arc = i1937[27]
  i1936.arcMode = i1937[28]
  i1936.arcSpread = i1937[29]
  i1936.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[30], i1936.arcSpeed)
  i1936.donutRadius = i1937[31]
  i1936.position = new pc.Vec3( i1937[32], i1937[33], i1937[34] )
  i1936.rotation = new pc.Vec3( i1937[35], i1937[36], i1937[37] )
  i1936.scale = new pc.Vec3( i1937[38], i1937[39], i1937[40] )
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1938 = root || new pc.ParticleSystemSizeBySpeed()
  var i1939 = data
  i1938.enabled = !!i1939[0]
  i1938.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[1], i1938.x)
  i1938.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[2], i1938.y)
  i1938.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[3], i1938.z)
  i1938.separateAxes = !!i1939[4]
  i1938.range = new pc.Vec2( i1939[5], i1939[6] )
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1940 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1941 = data
  i1940.enabled = !!i1941[0]
  i1940.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[1], i1940.x)
  i1940.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[2], i1940.y)
  i1940.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[3], i1940.z)
  i1940.separateAxes = !!i1941[4]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1942 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1943 = data
  i1942.enabled = !!i1943[0]
  i1942.mode = i1943[1]
  i1942.animation = i1943[2]
  i1942.numTilesX = i1943[3]
  i1942.numTilesY = i1943[4]
  i1942.useRandomRow = !!i1943[5]
  i1942.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[6], i1942.frameOverTime)
  i1942.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[7], i1942.startFrame)
  i1942.cycleCount = i1943[8]
  i1942.rowIndex = i1943[9]
  i1942.flipU = i1943[10]
  i1942.flipV = i1943[11]
  i1942.spriteCount = i1943[12]
  var i1945 = i1943[13]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 2) {
  request.r(i1945[i + 0], i1945[i + 1], 2, i1944, '')
  }
  i1942.sprites = i1944
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1948 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1949 = data
  i1948.enabled = !!i1949[0]
  i1948.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[1], i1948.x)
  i1948.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[2], i1948.y)
  i1948.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[3], i1948.z)
  i1948.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[4], i1948.radial)
  i1948.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[5], i1948.speedModifier)
  i1948.space = i1949[6]
  i1948.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[7], i1948.orbitalX)
  i1948.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[8], i1948.orbitalY)
  i1948.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[9], i1948.orbitalZ)
  i1948.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[10], i1948.orbitalOffsetX)
  i1948.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[11], i1948.orbitalOffsetY)
  i1948.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[12], i1948.orbitalOffsetZ)
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1950 = root || new pc.ParticleSystemNoise()
  var i1951 = data
  i1950.enabled = !!i1951[0]
  i1950.separateAxes = !!i1951[1]
  i1950.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[2], i1950.strengthX)
  i1950.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[3], i1950.strengthY)
  i1950.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[4], i1950.strengthZ)
  i1950.frequency = i1951[5]
  i1950.damping = !!i1951[6]
  i1950.octaveCount = i1951[7]
  i1950.octaveMultiplier = i1951[8]
  i1950.octaveScale = i1951[9]
  i1950.quality = i1951[10]
  i1950.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[11], i1950.scrollSpeed)
  i1950.scrollSpeedMultiplier = i1951[12]
  i1950.remapEnabled = !!i1951[13]
  i1950.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[14], i1950.remapX)
  i1950.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[15], i1950.remapY)
  i1950.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[16], i1950.remapZ)
  i1950.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[17], i1950.positionAmount)
  i1950.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[18], i1950.rotationAmount)
  i1950.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[19], i1950.sizeAmount)
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1952 = root || new pc.ParticleSystemInheritVelocity()
  var i1953 = data
  i1952.enabled = !!i1953[0]
  i1952.mode = i1953[1]
  i1952.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[2], i1952.curve)
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1954 = root || new pc.ParticleSystemForceOverLifetime()
  var i1955 = data
  i1954.enabled = !!i1955[0]
  i1954.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[1], i1954.x)
  i1954.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[2], i1954.y)
  i1954.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[3], i1954.z)
  i1954.space = i1955[4]
  i1954.randomized = !!i1955[5]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1956 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1957 = data
  i1956.enabled = !!i1957[0]
  i1956.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[1], i1956.limit)
  i1956.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[2], i1956.limitX)
  i1956.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[3], i1956.limitY)
  i1956.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[4], i1956.limitZ)
  i1956.dampen = i1957[5]
  i1956.separateAxes = !!i1957[6]
  i1956.space = i1957[7]
  i1956.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[8], i1956.drag)
  i1956.multiplyDragByParticleSize = !!i1957[9]
  i1956.multiplyDragByParticleVelocity = !!i1957[10]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1959 = data
  i1958.enabled = !!i1959[0]
  request.r(i1959[1], i1959[2], 0, i1958, 'sharedMaterial')
  var i1961 = i1959[3]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 2) {
  request.r(i1961[i + 0], i1961[i + 1], 2, i1960, '')
  }
  i1958.sharedMaterials = i1960
  i1958.receiveShadows = !!i1959[4]
  i1958.shadowCastingMode = i1959[5]
  i1958.sortingLayerID = i1959[6]
  i1958.sortingOrder = i1959[7]
  i1958.lightmapIndex = i1959[8]
  i1958.lightmapSceneIndex = i1959[9]
  i1958.lightmapScaleOffset = new pc.Vec4( i1959[10], i1959[11], i1959[12], i1959[13] )
  i1958.lightProbeUsage = i1959[14]
  i1958.reflectionProbeUsage = i1959[15]
  request.r(i1959[16], i1959[17], 0, i1958, 'mesh')
  i1958.meshCount = i1959[18]
  i1958.activeVertexStreamsCount = i1959[19]
  i1958.alignment = i1959[20]
  i1958.renderMode = i1959[21]
  i1958.sortMode = i1959[22]
  i1958.lengthScale = i1959[23]
  i1958.velocityScale = i1959[24]
  i1958.cameraVelocityScale = i1959[25]
  i1958.normalDirection = i1959[26]
  i1958.sortingFudge = i1959[27]
  i1958.minParticleSize = i1959[28]
  i1958.maxParticleSize = i1959[29]
  i1958.pivot = new pc.Vec3( i1959[30], i1959[31], i1959[32] )
  request.r(i1959[33], i1959[34], 0, i1958, 'trailMaterial')
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1963 = data
  i1962.cullTransparentMesh = !!i1963[0]
  return i1962
}

Deserializers["UnityEngine.UI.Extensions.CasualGame.UIParticleSystem"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.UI.Extensions.CasualGame.UIParticleSystem' )
  var i1965 = data
  i1964.fixedTime = !!i1965[0]
  i1964.use3dRotation = !!i1965[1]
  request.r(i1965[2], i1965[3], 0, i1964, 'm_Material')
  i1964.m_Maskable = !!i1965[4]
  i1964.m_Color = new pc.Color(i1965[5], i1965[6], i1965[7], i1965[8])
  i1964.m_RaycastTarget = !!i1965[9]
  i1964.m_RaycastPadding = new pc.Vec4( i1965[10], i1965[11], i1965[12], i1965[13] )
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1967 = data
  i1966.name = i1967[0]
  i1966.atlasId = i1967[1]
  i1966.mipmapCount = i1967[2]
  i1966.hdr = !!i1967[3]
  i1966.size = i1967[4]
  i1966.anisoLevel = i1967[5]
  i1966.filterMode = i1967[6]
  var i1969 = i1967[7]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 4) {
    i1968.push( UnityEngine.Rect.MinMaxRect(i1969[i + 0], i1969[i + 1], i1969[i + 2], i1969[i + 3]) );
  }
  i1966.rects = i1968
  i1966.wrapU = i1967[8]
  i1966.wrapV = i1967[9]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1973 = data
  i1972.name = i1973[0]
  i1972.index = i1973[1]
  i1972.startup = !!i1973[2]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1975 = data
  i1974.enabled = !!i1975[0]
  i1974.aspect = i1975[1]
  i1974.orthographic = !!i1975[2]
  i1974.orthographicSize = i1975[3]
  i1974.backgroundColor = new pc.Color(i1975[4], i1975[5], i1975[6], i1975[7])
  i1974.nearClipPlane = i1975[8]
  i1974.farClipPlane = i1975[9]
  i1974.fieldOfView = i1975[10]
  i1974.depth = i1975[11]
  i1974.clearFlags = i1975[12]
  i1974.cullingMask = i1975[13]
  i1974.rect = i1975[14]
  request.r(i1975[15], i1975[16], 0, i1974, 'targetTexture')
  i1974.usePhysicalProperties = !!i1975[17]
  i1974.focalLength = i1975[18]
  i1974.sensorSize = new pc.Vec2( i1975[19], i1975[20] )
  i1974.lensShift = new pc.Vec2( i1975[21], i1975[22] )
  i1974.gateFit = i1975[23]
  i1974.commandBufferCount = i1975[24]
  i1974.cameraType = i1975[25]
  return i1974
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1977 = data
  i1976.m_RenderShadows = !!i1977[0]
  i1976.m_RequiresDepthTextureOption = i1977[1]
  i1976.m_RequiresOpaqueTextureOption = i1977[2]
  i1976.m_CameraType = i1977[3]
  var i1979 = i1977[4]
  var i1978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1979.length; i += 2) {
  request.r(i1979[i + 0], i1979[i + 1], 1, i1978, '')
  }
  i1976.m_Cameras = i1978
  i1976.m_RendererIndex = i1977[5]
  i1976.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1977[6] )
  request.r(i1977[7], i1977[8], 0, i1976, 'm_VolumeTrigger')
  i1976.m_VolumeFrameworkUpdateModeOption = i1977[9]
  i1976.m_RenderPostProcessing = !!i1977[10]
  i1976.m_Antialiasing = i1977[11]
  i1976.m_AntialiasingQuality = i1977[12]
  i1976.m_StopNaN = !!i1977[13]
  i1976.m_Dithering = !!i1977[14]
  i1976.m_ClearDepth = !!i1977[15]
  i1976.m_AllowXRRendering = !!i1977[16]
  i1976.m_AllowHDROutput = !!i1977[17]
  i1976.m_UseScreenCoordOverride = !!i1977[18]
  i1976.m_ScreenSizeOverride = new pc.Vec4( i1977[19], i1977[20], i1977[21], i1977[22] )
  i1976.m_ScreenCoordScaleBias = new pc.Vec4( i1977[23], i1977[24], i1977[25], i1977[26] )
  i1976.m_RequiresDepthTexture = !!i1977[27]
  i1976.m_RequiresColorTexture = !!i1977[28]
  i1976.m_Version = i1977[29]
  i1976.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1977[30], i1976.m_TaaSettings)
  return i1976
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i1983 = data
  i1982.m_Quality = i1983[0]
  i1982.m_FrameInfluence = i1983[1]
  i1982.m_JitterScale = i1983[2]
  i1982.m_MipBias = i1983[3]
  i1982.m_VarianceClampScale = i1983[4]
  i1982.m_ContrastAdaptiveSharpening = i1983[5]
  return i1982
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i1985 = data
  i1984.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i1985[0] )
  i1984.m_MaxRayIntersections = i1985[1]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1987 = data
  i1986.enabled = !!i1987[0]
  i1986.type = i1987[1]
  i1986.color = new pc.Color(i1987[2], i1987[3], i1987[4], i1987[5])
  i1986.cullingMask = i1987[6]
  i1986.intensity = i1987[7]
  i1986.range = i1987[8]
  i1986.spotAngle = i1987[9]
  i1986.shadows = i1987[10]
  i1986.shadowNormalBias = i1987[11]
  i1986.shadowBias = i1987[12]
  i1986.shadowStrength = i1987[13]
  i1986.shadowResolution = i1987[14]
  i1986.lightmapBakeType = i1987[15]
  i1986.renderMode = i1987[16]
  request.r(i1987[17], i1987[18], 0, i1986, 'cookie')
  i1986.cookieSize = i1987[19]
  return i1986
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i1988 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i1989 = data
  i1988.m_Version = i1989[0]
  i1988.m_UsePipelineSettings = !!i1989[1]
  i1988.m_AdditionalLightsShadowResolutionTier = i1989[2]
  i1988.m_LightLayerMask = i1989[3]
  i1988.m_RenderingLayers = i1989[4]
  i1988.m_CustomShadowLayers = !!i1989[5]
  i1988.m_ShadowLayerMask = i1989[6]
  i1988.m_ShadowRenderingLayers = i1989[7]
  i1988.m_LightCookieSize = new pc.Vec2( i1989[8], i1989[9] )
  i1988.m_LightCookieOffset = new pc.Vec2( i1989[10], i1989[11] )
  i1988.m_SoftShadowQuality = i1989[12]
  return i1988
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i1991 = data
  i1990.priority = i1991[0]
  i1990.blendDistance = i1991[1]
  i1990.weight = i1991[2]
  request.r(i1991[3], i1991[4], 0, i1990, 'sharedProfile')
  i1990.m_IsGlobal = !!i1991[5]
  return i1990
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1993 = data
  request.r(i1993[0], i1993[1], 0, i1992, 'm_FirstSelected')
  i1992.m_sendNavigationEvents = !!i1993[2]
  i1992.m_DragThreshold = i1993[3]
  return i1992
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1995 = data
  i1994.m_HorizontalAxis = i1995[0]
  i1994.m_VerticalAxis = i1995[1]
  i1994.m_SubmitButton = i1995[2]
  i1994.m_CancelButton = i1995[3]
  i1994.m_InputActionsPerSecond = i1995[4]
  i1994.m_RepeatDelay = i1995[5]
  i1994.m_ForceModuleActive = !!i1995[6]
  i1994.m_SendPointerHoverToParent = !!i1995[7]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1997 = data
  i1996.enabled = !!i1997[0]
  i1996.planeDistance = i1997[1]
  i1996.referencePixelsPerUnit = i1997[2]
  i1996.isFallbackOverlay = !!i1997[3]
  i1996.renderMode = i1997[4]
  i1996.renderOrder = i1997[5]
  i1996.sortingLayerName = i1997[6]
  i1996.sortingOrder = i1997[7]
  i1996.scaleFactor = i1997[8]
  request.r(i1997[9], i1997[10], 0, i1996, 'worldCamera')
  i1996.overrideSorting = !!i1997[11]
  i1996.pixelPerfect = !!i1997[12]
  i1996.targetDisplay = i1997[13]
  i1996.overridePixelPerfect = !!i1997[14]
  return i1996
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1998 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1999 = data
  i1998.m_UiScaleMode = i1999[0]
  i1998.m_ReferencePixelsPerUnit = i1999[1]
  i1998.m_ScaleFactor = i1999[2]
  i1998.m_ReferenceResolution = new pc.Vec2( i1999[3], i1999[4] )
  i1998.m_ScreenMatchMode = i1999[5]
  i1998.m_MatchWidthOrHeight = i1999[6]
  i1998.m_PhysicalUnit = i1999[7]
  i1998.m_FallbackScreenDPI = i1999[8]
  i1998.m_DefaultSpriteDPI = i1999[9]
  i1998.m_DynamicPixelsPerUnit = i1999[10]
  i1998.m_PresetInfoIsWorld = !!i1999[11]
  return i1998
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2000 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2001 = data
  i2000.m_IgnoreReversedGraphics = !!i2001[0]
  i2000.m_BlockingObjects = i2001[1]
  i2000.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2001[2] )
  return i2000
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2002 = root || request.c( 'UnityEngine.UI.Image' )
  var i2003 = data
  request.r(i2003[0], i2003[1], 0, i2002, 'm_Sprite')
  i2002.m_Type = i2003[2]
  i2002.m_PreserveAspect = !!i2003[3]
  i2002.m_FillCenter = !!i2003[4]
  i2002.m_FillMethod = i2003[5]
  i2002.m_FillAmount = i2003[6]
  i2002.m_FillClockwise = !!i2003[7]
  i2002.m_FillOrigin = i2003[8]
  i2002.m_UseSpriteMesh = !!i2003[9]
  i2002.m_PixelsPerUnitMultiplier = i2003[10]
  request.r(i2003[11], i2003[12], 0, i2002, 'm_Material')
  i2002.m_Maskable = !!i2003[13]
  i2002.m_Color = new pc.Color(i2003[14], i2003[15], i2003[16], i2003[17])
  i2002.m_RaycastTarget = !!i2003[18]
  i2002.m_RaycastPadding = new pc.Vec4( i2003[19], i2003[20], i2003[21], i2003[22] )
  return i2002
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2004 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2005 = data
  i2004.m_hasFontAssetChanged = !!i2005[0]
  request.r(i2005[1], i2005[2], 0, i2004, 'm_baseMaterial')
  i2004.m_maskOffset = new pc.Vec4( i2005[3], i2005[4], i2005[5], i2005[6] )
  i2004.m_text = i2005[7]
  i2004.m_isRightToLeft = !!i2005[8]
  request.r(i2005[9], i2005[10], 0, i2004, 'm_fontAsset')
  request.r(i2005[11], i2005[12], 0, i2004, 'm_sharedMaterial')
  var i2007 = i2005[13]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 2) {
  request.r(i2007[i + 0], i2007[i + 1], 2, i2006, '')
  }
  i2004.m_fontSharedMaterials = i2006
  request.r(i2005[14], i2005[15], 0, i2004, 'm_fontMaterial')
  var i2009 = i2005[16]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 2) {
  request.r(i2009[i + 0], i2009[i + 1], 2, i2008, '')
  }
  i2004.m_fontMaterials = i2008
  i2004.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2005[17], i2005[18], i2005[19], i2005[20])
  i2004.m_fontColor = new pc.Color(i2005[21], i2005[22], i2005[23], i2005[24])
  i2004.m_enableVertexGradient = !!i2005[25]
  i2004.m_colorMode = i2005[26]
  i2004.m_fontColorGradient = request.d('TMPro.VertexGradient', i2005[27], i2004.m_fontColorGradient)
  request.r(i2005[28], i2005[29], 0, i2004, 'm_fontColorGradientPreset')
  request.r(i2005[30], i2005[31], 0, i2004, 'm_spriteAsset')
  i2004.m_tintAllSprites = !!i2005[32]
  request.r(i2005[33], i2005[34], 0, i2004, 'm_StyleSheet')
  i2004.m_TextStyleHashCode = i2005[35]
  i2004.m_overrideHtmlColors = !!i2005[36]
  i2004.m_faceColor = UnityEngine.Color32.ConstructColor(i2005[37], i2005[38], i2005[39], i2005[40])
  i2004.m_fontSize = i2005[41]
  i2004.m_fontSizeBase = i2005[42]
  i2004.m_fontWeight = i2005[43]
  i2004.m_enableAutoSizing = !!i2005[44]
  i2004.m_fontSizeMin = i2005[45]
  i2004.m_fontSizeMax = i2005[46]
  i2004.m_fontStyle = i2005[47]
  i2004.m_HorizontalAlignment = i2005[48]
  i2004.m_VerticalAlignment = i2005[49]
  i2004.m_textAlignment = i2005[50]
  i2004.m_characterSpacing = i2005[51]
  i2004.m_wordSpacing = i2005[52]
  i2004.m_lineSpacing = i2005[53]
  i2004.m_lineSpacingMax = i2005[54]
  i2004.m_paragraphSpacing = i2005[55]
  i2004.m_charWidthMaxAdj = i2005[56]
  i2004.m_enableWordWrapping = !!i2005[57]
  i2004.m_wordWrappingRatios = i2005[58]
  i2004.m_overflowMode = i2005[59]
  request.r(i2005[60], i2005[61], 0, i2004, 'm_linkedTextComponent')
  request.r(i2005[62], i2005[63], 0, i2004, 'parentLinkedComponent')
  i2004.m_enableKerning = !!i2005[64]
  i2004.m_enableExtraPadding = !!i2005[65]
  i2004.checkPaddingRequired = !!i2005[66]
  i2004.m_isRichText = !!i2005[67]
  i2004.m_parseCtrlCharacters = !!i2005[68]
  i2004.m_isOrthographic = !!i2005[69]
  i2004.m_isCullingEnabled = !!i2005[70]
  i2004.m_horizontalMapping = i2005[71]
  i2004.m_verticalMapping = i2005[72]
  i2004.m_uvLineOffset = i2005[73]
  i2004.m_geometrySortingOrder = i2005[74]
  i2004.m_IsTextObjectScaleStatic = !!i2005[75]
  i2004.m_VertexBufferAutoSizeReduction = !!i2005[76]
  i2004.m_useMaxVisibleDescender = !!i2005[77]
  i2004.m_pageToDisplay = i2005[78]
  i2004.m_margin = new pc.Vec4( i2005[79], i2005[80], i2005[81], i2005[82] )
  i2004.m_isUsingLegacyAnimationComponent = !!i2005[83]
  i2004.m_isVolumetricText = !!i2005[84]
  request.r(i2005[85], i2005[86], 0, i2004, 'm_Material')
  i2004.m_Maskable = !!i2005[87]
  i2004.m_Color = new pc.Color(i2005[88], i2005[89], i2005[90], i2005[91])
  i2004.m_RaycastTarget = !!i2005[92]
  i2004.m_RaycastPadding = new pc.Vec4( i2005[93], i2005[94], i2005[95], i2005[96] )
  return i2004
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2010 = root || request.c( 'TMPro.VertexGradient' )
  var i2011 = data
  i2010.topLeft = new pc.Color(i2011[0], i2011[1], i2011[2], i2011[3])
  i2010.topRight = new pc.Color(i2011[4], i2011[5], i2011[6], i2011[7])
  i2010.bottomLeft = new pc.Color(i2011[8], i2011[9], i2011[10], i2011[11])
  i2010.bottomRight = new pc.Color(i2011[12], i2011[13], i2011[14], i2011[15])
  return i2010
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2012 = root || request.c( 'UIManager' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, 'textBack')
  request.r(i2013[2], i2013[3], 0, i2012, 'goodText')
  return i2012
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2014 = root || request.c( 'GameManager' )
  var i2015 = data
  request.r(i2015[0], i2015[1], 0, i2014, 'goodsPrefab')
  request.r(i2015[2], i2015[3], 0, i2014, 'casePrefab')
  i2014.startPosition = new pc.Vec3( i2015[4], i2015[5], i2015[6] )
  i2014.spacingX = i2015[7]
  i2014.spacingY = i2015[8]
  i2014.pyramidLayers = i2015[9]
  request.r(i2015[10], i2015[11], 0, i2014, 'caseDatabase')
  request.r(i2015[12], i2015[13], 0, i2014, 'goodsDatabase')
  return i2014
}

Deserializers["EffectManager"] = function (request, data, root) {
  var i2016 = root || request.c( 'EffectManager' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, 'clickClip')
  request.r(i2017[2], i2017[3], 0, i2016, 'bgmClip')
  request.r(i2017[4], i2017[5], 0, i2016, 'sfxSource')
  request.r(i2017[6], i2017[7], 0, i2016, 'bgmSource')
  request.r(i2017[8], i2017[9], 0, i2016, 'popEffectPrefab')
  request.r(i2017[10], i2017[11], 0, i2016, 'goodImage')
  i2016.fadeInDuration = i2017[12]
  i2016.visibleDuration = i2017[13]
  i2016.fadeOutDuration = i2017[14]
  i2016.poolSize = i2017[15]
  request.r(i2017[16], i2017[17], 0, i2016, 'effectsPoolParent')
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2019 = data
  request.r(i2019[0], i2019[1], 0, i2018, 'clip')
  request.r(i2019[2], i2019[3], 0, i2018, 'outputAudioMixerGroup')
  i2018.playOnAwake = !!i2019[4]
  i2018.loop = !!i2019[5]
  i2018.time = i2019[6]
  i2018.volume = i2019[7]
  i2018.pitch = i2019[8]
  i2018.enabled = !!i2019[9]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2021 = data
  i2020.ambientIntensity = i2021[0]
  i2020.reflectionIntensity = i2021[1]
  i2020.ambientMode = i2021[2]
  i2020.ambientLight = new pc.Color(i2021[3], i2021[4], i2021[5], i2021[6])
  i2020.ambientSkyColor = new pc.Color(i2021[7], i2021[8], i2021[9], i2021[10])
  i2020.ambientGroundColor = new pc.Color(i2021[11], i2021[12], i2021[13], i2021[14])
  i2020.ambientEquatorColor = new pc.Color(i2021[15], i2021[16], i2021[17], i2021[18])
  i2020.fogColor = new pc.Color(i2021[19], i2021[20], i2021[21], i2021[22])
  i2020.fogEndDistance = i2021[23]
  i2020.fogStartDistance = i2021[24]
  i2020.fogDensity = i2021[25]
  i2020.fog = !!i2021[26]
  request.r(i2021[27], i2021[28], 0, i2020, 'skybox')
  i2020.fogMode = i2021[29]
  var i2023 = i2021[30]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2023[i + 0]) );
  }
  i2020.lightmaps = i2022
  i2020.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2021[31], i2020.lightProbes)
  i2020.lightmapsMode = i2021[32]
  i2020.mixedBakeMode = i2021[33]
  i2020.environmentLightingMode = i2021[34]
  i2020.ambientProbe = new pc.SphericalHarmonicsL2(i2021[35])
  i2020.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2021[36])
  i2020.useReferenceAmbientProbe = !!i2021[37]
  request.r(i2021[38], i2021[39], 0, i2020, 'customReflection')
  request.r(i2021[40], i2021[41], 0, i2020, 'defaultReflection')
  i2020.defaultReflectionMode = i2021[42]
  i2020.defaultReflectionResolution = i2021[43]
  i2020.sunLightObjectId = i2021[44]
  i2020.pixelLightCount = i2021[45]
  i2020.defaultReflectionHDR = !!i2021[46]
  i2020.hasLightDataAsset = !!i2021[47]
  i2020.hasManualGenerate = !!i2021[48]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2027 = data
  request.r(i2027[0], i2027[1], 0, i2026, 'lightmapColor')
  request.r(i2027[2], i2027[3], 0, i2026, 'lightmapDirection')
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2028 = root || new UnityEngine.LightProbes()
  var i2029 = data
  return i2028
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i2036 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i2037 = data
  request.r(i2037[0], i2037[1], 0, i2036, 'panelPrefab')
  var i2039 = i2037[2]
  var i2038 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i2039[i + 0]));
  }
  i2036.prefabs = i2038
  return i2036
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i2042 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i2043 = data
  i2042.type = i2043[0]
  request.r(i2043[1], i2043[2], 0, i2042, 'prefab')
  return i2042
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2044 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2045 = data
  i2044.m_Spacing = i2045[0]
  i2044.m_ChildForceExpandWidth = !!i2045[1]
  i2044.m_ChildForceExpandHeight = !!i2045[2]
  i2044.m_ChildControlWidth = !!i2045[3]
  i2044.m_ChildControlHeight = !!i2045[4]
  i2044.m_ChildScaleWidth = !!i2045[5]
  i2044.m_ChildScaleHeight = !!i2045[6]
  i2044.m_ReverseArrangement = !!i2045[7]
  i2044.m_Padding = UnityEngine.RectOffset.FromPaddings(i2045[8], i2045[9], i2045[10], i2045[11])
  i2044.m_ChildAlignment = i2045[12]
  return i2044
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2046 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2047 = data
  i2046.m_HorizontalFit = i2047[0]
  i2046.m_VerticalFit = i2047[1]
  return i2046
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i2049 = data
  request.r(i2049[0], i2049[1], 0, i2048, 'contentHolder')
  return i2048
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i2050 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i2051 = data
  request.r(i2051[0], i2051[1], 0, i2050, 'nameLabel')
  request.r(i2051[2], i2051[3], 0, i2050, 'scrollRect')
  request.r(i2051[4], i2051[5], 0, i2050, 'viewport')
  request.r(i2051[6], i2051[7], 0, i2050, 'Canvas')
  return i2050
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i2052 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i2053 = data
  i2052.m_IgnoreLayout = !!i2053[0]
  i2052.m_MinWidth = i2053[1]
  i2052.m_MinHeight = i2053[2]
  i2052.m_PreferredWidth = i2053[3]
  i2052.m_PreferredHeight = i2053[4]
  i2052.m_FlexibleWidth = i2053[5]
  i2052.m_FlexibleHeight = i2053[6]
  i2052.m_LayoutPriority = i2053[7]
  return i2052
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.UI.Button' )
  var i2055 = data
  i2054.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2055[0], i2054.m_OnClick)
  i2054.m_Navigation = request.d('UnityEngine.UI.Navigation', i2055[1], i2054.m_Navigation)
  i2054.m_Transition = i2055[2]
  i2054.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2055[3], i2054.m_Colors)
  i2054.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2055[4], i2054.m_SpriteState)
  i2054.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2055[5], i2054.m_AnimationTriggers)
  i2054.m_Interactable = !!i2055[6]
  request.r(i2055[7], i2055[8], 0, i2054, 'm_TargetGraphic')
  return i2054
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2056 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2057 = data
  i2056.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2057[0], i2056.m_PersistentCalls)
  return i2056
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2058 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2059 = data
  var i2061 = i2059[0]
  var i2060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.add(request.d('UnityEngine.Events.PersistentCall', i2061[i + 0]));
  }
  i2058.m_Calls = i2060
  return i2058
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2064 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2065 = data
  request.r(i2065[0], i2065[1], 0, i2064, 'm_Target')
  i2064.m_TargetAssemblyTypeName = i2065[2]
  i2064.m_MethodName = i2065[3]
  i2064.m_Mode = i2065[4]
  i2064.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2065[5], i2064.m_Arguments)
  i2064.m_CallState = i2065[6]
  return i2064
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2066 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2067 = data
  request.r(i2067[0], i2067[1], 0, i2066, 'm_ObjectArgument')
  i2066.m_ObjectArgumentAssemblyTypeName = i2067[2]
  i2066.m_IntArgument = i2067[3]
  i2066.m_FloatArgument = i2067[4]
  i2066.m_StringArgument = i2067[5]
  i2066.m_BoolArgument = !!i2067[6]
  return i2066
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2068 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2069 = data
  i2068.m_Mode = i2069[0]
  i2068.m_WrapAround = !!i2069[1]
  request.r(i2069[2], i2069[3], 0, i2068, 'm_SelectOnUp')
  request.r(i2069[4], i2069[5], 0, i2068, 'm_SelectOnDown')
  request.r(i2069[6], i2069[7], 0, i2068, 'm_SelectOnLeft')
  request.r(i2069[8], i2069[9], 0, i2068, 'm_SelectOnRight')
  return i2068
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2071 = data
  i2070.m_NormalColor = new pc.Color(i2071[0], i2071[1], i2071[2], i2071[3])
  i2070.m_HighlightedColor = new pc.Color(i2071[4], i2071[5], i2071[6], i2071[7])
  i2070.m_PressedColor = new pc.Color(i2071[8], i2071[9], i2071[10], i2071[11])
  i2070.m_SelectedColor = new pc.Color(i2071[12], i2071[13], i2071[14], i2071[15])
  i2070.m_DisabledColor = new pc.Color(i2071[16], i2071[17], i2071[18], i2071[19])
  i2070.m_ColorMultiplier = i2071[20]
  i2070.m_FadeDuration = i2071[21]
  return i2070
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2073 = data
  request.r(i2073[0], i2073[1], 0, i2072, 'm_HighlightedSprite')
  request.r(i2073[2], i2073[3], 0, i2072, 'm_PressedSprite')
  request.r(i2073[4], i2073[5], 0, i2072, 'm_SelectedSprite')
  request.r(i2073[6], i2073[7], 0, i2072, 'm_DisabledSprite')
  return i2072
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2074 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2075 = data
  i2074.m_NormalTrigger = i2075[0]
  i2074.m_HighlightedTrigger = i2075[1]
  i2074.m_PressedTrigger = i2075[2]
  i2074.m_SelectedTrigger = i2075[3]
  i2074.m_DisabledTrigger = i2075[4]
  return i2074
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.UI.Text' )
  var i2077 = data
  i2076.m_FontData = request.d('UnityEngine.UI.FontData', i2077[0], i2076.m_FontData)
  i2076.m_Text = i2077[1]
  request.r(i2077[2], i2077[3], 0, i2076, 'm_Material')
  i2076.m_Maskable = !!i2077[4]
  i2076.m_Color = new pc.Color(i2077[5], i2077[6], i2077[7], i2077[8])
  i2076.m_RaycastTarget = !!i2077[9]
  i2076.m_RaycastPadding = new pc.Vec4( i2077[10], i2077[11], i2077[12], i2077[13] )
  return i2076
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2079 = data
  request.r(i2079[0], i2079[1], 0, i2078, 'm_Font')
  i2078.m_FontSize = i2079[2]
  i2078.m_FontStyle = i2079[3]
  i2078.m_BestFit = !!i2079[4]
  i2078.m_MinSize = i2079[5]
  i2078.m_MaxSize = i2079[6]
  i2078.m_Alignment = i2079[7]
  i2078.m_AlignByGeometry = !!i2079[8]
  i2078.m_RichText = !!i2079[9]
  i2078.m_HorizontalOverflow = i2079[10]
  i2078.m_VerticalOverflow = i2079[11]
  i2078.m_LineSpacing = i2079[12]
  return i2078
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2081 = data
  request.r(i2081[0], i2081[1], 0, i2080, 'm_Content')
  i2080.m_Horizontal = !!i2081[2]
  i2080.m_Vertical = !!i2081[3]
  i2080.m_MovementType = i2081[4]
  i2080.m_Elasticity = i2081[5]
  i2080.m_Inertia = !!i2081[6]
  i2080.m_DecelerationRate = i2081[7]
  i2080.m_ScrollSensitivity = i2081[8]
  request.r(i2081[9], i2081[10], 0, i2080, 'm_Viewport')
  request.r(i2081[11], i2081[12], 0, i2080, 'm_HorizontalScrollbar')
  request.r(i2081[13], i2081[14], 0, i2080, 'm_VerticalScrollbar')
  i2080.m_HorizontalScrollbarVisibility = i2081[15]
  i2080.m_VerticalScrollbarVisibility = i2081[16]
  i2080.m_HorizontalScrollbarSpacing = i2081[17]
  i2080.m_VerticalScrollbarSpacing = i2081[18]
  i2080.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2081[19], i2080.m_OnValueChanged)
  return i2080
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2082 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2083 = data
  i2082.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2083[0], i2082.m_PersistentCalls)
  return i2082
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2085 = data
  i2084.m_ShowMaskGraphic = !!i2085[0]
  return i2084
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i2087 = data
  request.r(i2087[0], i2087[1], 0, i2086, 'm_HandleRect')
  i2086.m_Direction = i2087[2]
  i2086.m_Value = i2087[3]
  i2086.m_Size = i2087[4]
  i2086.m_NumberOfSteps = i2087[5]
  i2086.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i2087[6], i2086.m_OnValueChanged)
  i2086.m_Navigation = request.d('UnityEngine.UI.Navigation', i2087[7], i2086.m_Navigation)
  i2086.m_Transition = i2087[8]
  i2086.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2087[9], i2086.m_Colors)
  i2086.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2087[10], i2086.m_SpriteState)
  i2086.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2087[11], i2086.m_AnimationTriggers)
  i2086.m_Interactable = !!i2087[12]
  request.r(i2087[13], i2087[14], 0, i2086, 'm_TargetGraphic')
  return i2086
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i2089 = data
  i2088.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2089[0], i2088.m_PersistentCalls)
  return i2088
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i2091 = data
  var i2093 = i2091[0]
  var i2092 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i2093[i + 0]));
  }
  i2090.m_Delegates = i2092
  return i2090
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i2097 = data
  i2096.eventID = i2097[0]
  i2096.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i2097[1], i2096.callback)
  return i2096
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i2098 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i2099 = data
  i2098.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2099[0], i2098.m_PersistentCalls)
  return i2098
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i2100 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i2101 = data
  request.r(i2101[0], i2101[1], 0, i2100, 'nameLabel')
  request.r(i2101[2], i2101[3], 0, i2100, 'valueLabel')
  i2100.colorDefault = new pc.Color(i2101[4], i2101[5], i2101[6], i2101[7])
  i2100.colorSelected = new pc.Color(i2101[8], i2101[9], i2101[10], i2101[11])
  return i2100
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i2102 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i2103 = data
  request.r(i2103[0], i2103[1], 0, i2102, 'nameLabel')
  request.r(i2103[2], i2103[3], 0, i2102, 'valueToggle')
  request.r(i2103[4], i2103[5], 0, i2102, 'checkmarkImage')
  i2102.colorDefault = new pc.Color(i2103[6], i2103[7], i2103[8], i2103[9])
  i2102.colorSelected = new pc.Color(i2103[10], i2103[11], i2103[12], i2103[13])
  return i2102
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i2104 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i2105 = data
  i2104.toggleTransition = i2105[0]
  request.r(i2105[1], i2105[2], 0, i2104, 'graphic')
  i2104.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2105[3], i2104.onValueChanged)
  request.r(i2105[4], i2105[5], 0, i2104, 'm_Group')
  i2104.m_IsOn = !!i2105[6]
  i2104.m_Navigation = request.d('UnityEngine.UI.Navigation', i2105[7], i2104.m_Navigation)
  i2104.m_Transition = i2105[8]
  i2104.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2105[9], i2104.m_Colors)
  i2104.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2105[10], i2104.m_SpriteState)
  i2104.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2105[11], i2104.m_AnimationTriggers)
  i2104.m_Interactable = !!i2105[12]
  request.r(i2105[13], i2105[14], 0, i2104, 'm_TargetGraphic')
  return i2104
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i2106 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i2107 = data
  i2106.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2107[0], i2106.m_PersistentCalls)
  return i2106
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i2108 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i2109 = data
  request.r(i2109[0], i2109[1], 0, i2108, 'nameLabel')
  request.r(i2109[2], i2109[3], 0, i2108, 'valueLabel')
  i2108.colorDefault = new pc.Color(i2109[4], i2109[5], i2109[6], i2109[7])
  i2108.colorSelected = new pc.Color(i2109[8], i2109[9], i2109[10], i2109[11])
  return i2108
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i2110 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i2111 = data
  request.r(i2111[0], i2111[1], 0, i2110, 'nameLabel')
  request.r(i2111[2], i2111[3], 0, i2110, 'valueLabel')
  i2110.colorDefault = new pc.Color(i2111[4], i2111[5], i2111[6], i2111[7])
  i2110.colorSelected = new pc.Color(i2111[8], i2111[9], i2111[10], i2111[11])
  return i2110
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i2112 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i2113 = data
  request.r(i2113[0], i2113[1], 0, i2112, 'nameLabel')
  request.r(i2113[2], i2113[3], 0, i2112, 'valueLabel')
  i2112.colorDefault = new pc.Color(i2113[4], i2113[5], i2113[6], i2113[7])
  i2112.colorSelected = new pc.Color(i2113[8], i2113[9], i2113[10], i2113[11])
  return i2112
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i2114 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i2115 = data
  request.r(i2115[0], i2115[1], 0, i2114, 'nextButtonText')
  request.r(i2115[2], i2115[3], 0, i2114, 'previousButtonText')
  request.r(i2115[4], i2115[5], 0, i2114, 'nameLabel')
  request.r(i2115[6], i2115[7], 0, i2114, 'valueLabel')
  i2114.colorDefault = new pc.Color(i2115[8], i2115[9], i2115[10], i2115[11])
  i2114.colorSelected = new pc.Color(i2115[12], i2115[13], i2115[14], i2115[15])
  return i2114
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i2116 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i2117 = data
  request.r(i2117[0], i2117[1], 0, i2116, 'nameLabel')
  i2116.colorDefault = new pc.Color(i2117[2], i2117[3], i2117[4], i2117[5])
  i2116.colorSelected = new pc.Color(i2117[6], i2117[7], i2117[8], i2117[9])
  return i2116
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i2118 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'nameLabel')
  request.r(i2119[2], i2119[3], 0, i2118, 'valueToggle')
  i2118.colorDefault = new pc.Color(i2119[4], i2119[5], i2119[6], i2119[7])
  i2118.colorSelected = new pc.Color(i2119[8], i2119[9], i2119[10], i2119[11])
  return i2118
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i2121 = data
  i2120.toggleTransition = i2121[0]
  request.r(i2121[1], i2121[2], 0, i2120, 'graphic')
  i2120.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2121[3], i2120.onValueChanged)
  request.r(i2121[4], i2121[5], 0, i2120, 'content')
  request.r(i2121[6], i2121[7], 0, i2120, 'arrowOpened')
  request.r(i2121[8], i2121[9], 0, i2120, 'arrowClosed')
  request.r(i2121[10], i2121[11], 0, i2120, 'm_Group')
  i2120.m_IsOn = !!i2121[12]
  i2120.m_Navigation = request.d('UnityEngine.UI.Navigation', i2121[13], i2120.m_Navigation)
  i2120.m_Transition = i2121[14]
  i2120.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2121[15], i2120.m_Colors)
  i2120.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2121[16], i2120.m_SpriteState)
  i2120.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2121[17], i2120.m_AnimationTriggers)
  i2120.m_Interactable = !!i2121[18]
  request.r(i2121[19], i2121[20], 0, i2120, 'm_TargetGraphic')
  return i2120
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i2123 = data
  request.r(i2123[0], i2123[1], 0, i2122, 'nameLabel')
  request.r(i2123[2], i2123[3], 0, i2122, 'valueToggle')
  request.r(i2123[4], i2123[5], 0, i2122, 'colorImage')
  request.r(i2123[6], i2123[7], 0, i2122, 'fieldR')
  request.r(i2123[8], i2123[9], 0, i2122, 'fieldG')
  request.r(i2123[10], i2123[11], 0, i2122, 'fieldB')
  request.r(i2123[12], i2123[13], 0, i2122, 'fieldA')
  i2122.colorDefault = new pc.Color(i2123[14], i2123[15], i2123[16], i2123[17])
  i2122.colorSelected = new pc.Color(i2123[18], i2123[19], i2123[20], i2123[21])
  return i2122
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i2125 = data
  request.r(i2125[0], i2125[1], 0, i2124, 'nameLabel')
  request.r(i2125[2], i2125[3], 0, i2124, 'valueLabel')
  i2124.colorDefault = new pc.Color(i2125[4], i2125[5], i2125[6], i2125[7])
  i2124.colorSelected = new pc.Color(i2125[8], i2125[9], i2125[10], i2125[11])
  return i2124
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i2127 = data
  request.r(i2127[0], i2127[1], 0, i2126, 'nameLabel')
  request.r(i2127[2], i2127[3], 0, i2126, 'valueToggle')
  request.r(i2127[4], i2127[5], 0, i2126, 'fieldX')
  request.r(i2127[6], i2127[7], 0, i2126, 'fieldY')
  i2126.colorDefault = new pc.Color(i2127[8], i2127[9], i2127[10], i2127[11])
  i2126.colorSelected = new pc.Color(i2127[12], i2127[13], i2127[14], i2127[15])
  return i2126
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i2129 = data
  request.r(i2129[0], i2129[1], 0, i2128, 'nameLabel')
  request.r(i2129[2], i2129[3], 0, i2128, 'valueToggle')
  request.r(i2129[4], i2129[5], 0, i2128, 'fieldX')
  request.r(i2129[6], i2129[7], 0, i2128, 'fieldY')
  request.r(i2129[8], i2129[9], 0, i2128, 'fieldZ')
  i2128.colorDefault = new pc.Color(i2129[10], i2129[11], i2129[12], i2129[13])
  i2128.colorSelected = new pc.Color(i2129[14], i2129[15], i2129[16], i2129[17])
  return i2128
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i2131 = data
  request.r(i2131[0], i2131[1], 0, i2130, 'nameLabel')
  request.r(i2131[2], i2131[3], 0, i2130, 'valueToggle')
  request.r(i2131[4], i2131[5], 0, i2130, 'fieldX')
  request.r(i2131[6], i2131[7], 0, i2130, 'fieldY')
  request.r(i2131[8], i2131[9], 0, i2130, 'fieldZ')
  request.r(i2131[10], i2131[11], 0, i2130, 'fieldW')
  i2130.colorDefault = new pc.Color(i2131[12], i2131[13], i2131[14], i2131[15])
  i2130.colorSelected = new pc.Color(i2131[16], i2131[17], i2131[18], i2131[19])
  return i2130
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i2133 = data
  i2132.colorDefault = new pc.Color(i2133[0], i2133[1], i2133[2], i2133[3])
  i2132.colorSelected = new pc.Color(i2133[4], i2133[5], i2133[6], i2133[7])
  return i2132
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2135 = data
  i2134.m_Spacing = i2135[0]
  i2134.m_ChildForceExpandWidth = !!i2135[1]
  i2134.m_ChildForceExpandHeight = !!i2135[2]
  i2134.m_ChildControlWidth = !!i2135[3]
  i2134.m_ChildControlHeight = !!i2135[4]
  i2134.m_ChildScaleWidth = !!i2135[5]
  i2134.m_ChildScaleHeight = !!i2135[6]
  i2134.m_ReverseArrangement = !!i2135[7]
  i2134.m_Padding = UnityEngine.RectOffset.FromPaddings(i2135[8], i2135[9], i2135[10], i2135[11])
  i2134.m_ChildAlignment = i2135[12]
  return i2134
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i2136 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i2137 = data
  i2136.colorDefault = new pc.Color(i2137[0], i2137[1], i2137[2], i2137[3])
  i2136.colorSelected = new pc.Color(i2137[4], i2137[5], i2137[6], i2137[7])
  return i2136
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i2139 = data
  request.r(i2139[0], i2139[1], 0, i2138, 'nameLabel')
  request.r(i2139[2], i2139[3], 0, i2138, 'header')
  i2138.colorDefault = new pc.Color(i2139[4], i2139[5], i2139[6], i2139[7])
  i2138.colorSelected = new pc.Color(i2139[8], i2139[9], i2139[10], i2139[11])
  return i2138
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i2141 = data
  request.r(i2141[0], i2141[1], 0, i2140, 'nameLabel')
  request.r(i2141[2], i2141[3], 0, i2140, 'valueToggle')
  var i2143 = i2141[4]
  var i2142 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i2143.length; i += 2) {
  request.r(i2143[i + 0], i2143[i + 1], 1, i2142, '')
  }
  i2140.toggles = i2142
  i2140.colorDefault = new pc.Color(i2141[5], i2141[6], i2141[7], i2141[8])
  i2140.colorSelected = new pc.Color(i2141[9], i2141[10], i2141[11], i2141[12])
  return i2140
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i2146 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'nameLabel')
  request.r(i2147[2], i2147[3], 0, i2146, 'valueToggle')
  request.r(i2147[4], i2147[5], 0, i2146, 'checkmarkImage')
  i2146.colorDefault = new pc.Color(i2147[6], i2147[7], i2147[8], i2147[9])
  i2146.colorSelected = new pc.Color(i2147[10], i2147[11], i2147[12], i2147[13])
  return i2146
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i2149 = data
  request.r(i2149[0], i2149[1], 0, i2148, 'nameLabel')
  request.r(i2149[2], i2149[3], 0, i2148, 'valueToggle')
  request.r(i2149[4], i2149[5], 0, i2148, 'checkmarkImage')
  i2148.colorDefault = new pc.Color(i2149[6], i2149[7], i2149[8], i2149[9])
  i2148.colorSelected = new pc.Color(i2149[10], i2149[11], i2149[12], i2149[13])
  return i2148
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i2151 = data
  request.r(i2151[0], i2151[1], 0, i2150, 'nextButtonText')
  request.r(i2151[2], i2151[3], 0, i2150, 'previousButtonText')
  request.r(i2151[4], i2151[5], 0, i2150, 'nameLabel')
  request.r(i2151[6], i2151[7], 0, i2150, 'valueLabel')
  i2150.colorDefault = new pc.Color(i2151[8], i2151[9], i2151[10], i2151[11])
  i2150.colorSelected = new pc.Color(i2151[12], i2151[13], i2151[14], i2151[15])
  return i2150
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i2153 = data
  request.r(i2153[0], i2153[1], 0, i2152, 'nameLabel')
  request.r(i2153[2], i2153[3], 0, i2152, 'valueToggle')
  i2152.colorDefault = new pc.Color(i2153[4], i2153[5], i2153[6], i2153[7])
  i2152.colorSelected = new pc.Color(i2153[8], i2153[9], i2153[10], i2153[11])
  return i2152
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i2155 = data
  request.r(i2155[0], i2155[1], 0, i2154, 'nameLabel')
  i2154.colorDefault = new pc.Color(i2155[2], i2155[3], i2155[4], i2155[5])
  i2154.colorSelected = new pc.Color(i2155[6], i2155[7], i2155[8], i2155[9])
  return i2154
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i2157 = data
  request.r(i2157[0], i2157[1], 0, i2156, 'nameLabel')
  request.r(i2157[2], i2157[3], 0, i2156, 'valueLabel')
  request.r(i2157[4], i2157[5], 0, i2156, 'progressBarRect')
  i2156.colorDefault = new pc.Color(i2157[6], i2157[7], i2157[8], i2157[9])
  i2156.colorSelected = new pc.Color(i2157[10], i2157[11], i2157[12], i2157[13])
  return i2156
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i2159 = data
  request.r(i2159[0], i2159[1], 0, i2158, 'nameLabel')
  request.r(i2159[2], i2159[3], 0, i2158, 'valueLabel')
  i2158.colorDefault = new pc.Color(i2159[4], i2159[5], i2159[6], i2159[7])
  i2158.colorSelected = new pc.Color(i2159[8], i2159[9], i2159[10], i2159[11])
  return i2158
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i2161 = data
  request.r(i2161[0], i2161[1], 0, i2160, 'nameLabel')
  request.r(i2161[2], i2161[3], 0, i2160, 'valueLabel')
  i2160.colorDefault = new pc.Color(i2161[4], i2161[5], i2161[6], i2161[7])
  i2160.colorSelected = new pc.Color(i2161[8], i2161[9], i2161[10], i2161[11])
  return i2160
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i2163 = data
  request.r(i2163[0], i2163[1], 0, i2162, 'nextButtonText')
  request.r(i2163[2], i2163[3], 0, i2162, 'previousButtonText')
  request.r(i2163[4], i2163[5], 0, i2162, 'nameLabel')
  request.r(i2163[6], i2163[7], 0, i2162, 'valueLabel')
  i2162.colorDefault = new pc.Color(i2163[8], i2163[9], i2163[10], i2163[11])
  i2162.colorSelected = new pc.Color(i2163[12], i2163[13], i2163[14], i2163[15])
  return i2162
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'nextButtonText')
  request.r(i2165[2], i2165[3], 0, i2164, 'previousButtonText')
  request.r(i2165[4], i2165[5], 0, i2164, 'nameLabel')
  request.r(i2165[6], i2165[7], 0, i2164, 'valueLabel')
  i2164.colorDefault = new pc.Color(i2165[8], i2165[9], i2165[10], i2165[11])
  i2164.colorSelected = new pc.Color(i2165[12], i2165[13], i2165[14], i2165[15])
  return i2164
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i2167 = data
  request.r(i2167[0], i2167[1], 0, i2166, 'panel')
  request.r(i2167[2], i2167[3], 0, i2166, 'valuePrefab')
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2169 = data
  i2168.AdditionalLightsPerObjectLimit = i2169[0]
  i2168.AdditionalLightsRenderingMode = i2169[1]
  i2168.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2169[2], i2168.LightRenderingMode)
  i2168.ColorGradingLutSize = i2169[3]
  i2168.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i2169[4], i2168.ColorGradingMode)
  i2168.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2169[5], i2168.MainLightRenderingMode)
  i2168.MainLightRenderingModeValue = i2169[6]
  i2168.SupportsMainLightShadows = !!i2169[7]
  i2168.MixedLightingSupported = !!i2169[8]
  i2168.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i2169[9], i2168.MsaaQuality)
  i2168.MSAA = i2169[10]
  i2168.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i2169[11], i2168.OpaqueDownsampling)
  i2168.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i2169[12], i2168.MainLightShadowmapResolution)
  i2168.MainLightShadowmapResolutionValue = i2169[13]
  i2168.SupportsSoftShadows = !!i2169[14]
  i2168.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i2169[15], i2168.SoftShadowQuality)
  i2168.SoftShadowQualityValue = i2169[16]
  i2168.ShadowDistance = i2169[17]
  i2168.ShadowCascadeCount = i2169[18]
  i2168.Cascade2Split = i2169[19]
  i2168.Cascade3Split = new pc.Vec2( i2169[20], i2169[21] )
  i2168.Cascade4Split = new pc.Vec3( i2169[22], i2169[23], i2169[24] )
  i2168.CascadeBorder = i2169[25]
  i2168.ShadowDepthBias = i2169[26]
  i2168.ShadowNormalBias = i2169[27]
  i2168.RenderScale = i2169[28]
  i2168.RequireDepthTexture = !!i2169[29]
  i2168.RequireOpaqueTexture = !!i2169[30]
  i2168.SupportsHDR = !!i2169[31]
  i2168.SupportsTerrainHoles = !!i2169[32]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2171 = data
  i2170.Disabled = i2171[0]
  i2170.PerVertex = i2171[1]
  i2170.PerPixel = i2171[2]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i2173 = data
  i2172.LowDynamicRange = i2173[0]
  i2172.HighDynamicRange = i2173[1]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i2175 = data
  i2174.Disabled = i2175[0]
  i2174._2x = i2175[1]
  i2174._4x = i2175[2]
  i2174._8x = i2175[3]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i2177 = data
  i2176.None = i2177[0]
  i2176._2xBilinear = i2177[1]
  i2176._4xBox = i2177[2]
  i2176._4xBilinear = i2177[3]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i2179 = data
  i2178._256 = i2179[0]
  i2178._512 = i2179[1]
  i2178._1024 = i2179[2]
  i2178._2048 = i2179[3]
  i2178._4096 = i2179[4]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i2181 = data
  i2180.UsePipelineSettings = i2181[0]
  i2180.Low = i2181[1]
  i2180.Medium = i2181[2]
  i2180.High = i2181[3]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2183 = data
  var i2185 = i2183[0]
  var i2184 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2185[i + 0]));
  }
  i2182.ShaderCompilationErrors = i2184
  i2182.name = i2183[1]
  i2182.guid = i2183[2]
  var i2187 = i2183[3]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( i2187[i + 0] );
  }
  i2182.shaderDefinedKeywords = i2186
  var i2189 = i2183[4]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2189[i + 0]) );
  }
  i2182.passes = i2188
  var i2191 = i2183[5]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2191[i + 0]) );
  }
  i2182.usePasses = i2190
  var i2193 = i2183[6]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2193[i + 0]) );
  }
  i2182.defaultParameterValues = i2192
  request.r(i2183[7], i2183[8], 0, i2182, 'unityFallbackShader')
  i2182.readDepth = !!i2183[9]
  i2182.isCreatedByShaderGraph = !!i2183[10]
  i2182.compiled = !!i2183[11]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2197 = data
  i2196.shaderName = i2197[0]
  i2196.errorMessage = i2197[1]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2202 = root || new pc.UnityShaderPass()
  var i2203 = data
  i2202.id = i2203[0]
  i2202.subShaderIndex = i2203[1]
  i2202.name = i2203[2]
  i2202.passType = i2203[3]
  i2202.grabPassTextureName = i2203[4]
  i2202.usePass = !!i2203[5]
  i2202.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2203[6], i2202.zTest)
  i2202.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2203[7], i2202.zWrite)
  i2202.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2203[8], i2202.culling)
  i2202.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2203[9], i2202.blending)
  i2202.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2203[10], i2202.alphaBlending)
  i2202.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2203[11], i2202.colorWriteMask)
  i2202.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2203[12], i2202.offsetUnits)
  i2202.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2203[13], i2202.offsetFactor)
  i2202.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2203[14], i2202.stencilRef)
  i2202.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2203[15], i2202.stencilReadMask)
  i2202.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2203[16], i2202.stencilWriteMask)
  i2202.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2203[17], i2202.stencilOp)
  i2202.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2203[18], i2202.stencilOpFront)
  i2202.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2203[19], i2202.stencilOpBack)
  var i2205 = i2203[20]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2205[i + 0]) );
  }
  i2202.tags = i2204
  var i2207 = i2203[21]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 1) {
    i2206.push( i2207[i + 0] );
  }
  i2202.passDefinedKeywords = i2206
  var i2209 = i2203[22]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2209[i + 0]) );
  }
  i2202.passDefinedKeywordGroups = i2208
  var i2211 = i2203[23]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2211[i + 0]) );
  }
  i2202.variants = i2210
  var i2213 = i2203[24]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2213[i + 0]) );
  }
  i2202.excludedVariants = i2212
  i2202.hasDepthReader = !!i2203[25]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2215 = data
  i2214.val = i2215[0]
  i2214.name = i2215[1]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2217 = data
  i2216.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2217[0], i2216.src)
  i2216.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2217[1], i2216.dst)
  i2216.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2217[2], i2216.op)
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2219 = data
  i2218.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2219[0], i2218.pass)
  i2218.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2219[1], i2218.fail)
  i2218.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2219[2], i2218.zFail)
  i2218.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2219[3], i2218.comp)
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2223 = data
  i2222.name = i2223[0]
  i2222.value = i2223[1]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2227 = data
  var i2229 = i2227[0]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( i2229[i + 0] );
  }
  i2226.keywords = i2228
  i2226.hasDiscard = !!i2227[1]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2233 = data
  i2232.passId = i2233[0]
  i2232.subShaderIndex = i2233[1]
  var i2235 = i2233[2]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.push( i2235[i + 0] );
  }
  i2232.keywords = i2234
  i2232.vertexProgram = i2233[3]
  i2232.fragmentProgram = i2233[4]
  i2232.exportedForWebGl2 = !!i2233[5]
  i2232.readDepth = !!i2233[6]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2239 = data
  request.r(i2239[0], i2239[1], 0, i2238, 'shader')
  i2238.pass = i2239[2]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2243 = data
  i2242.name = i2243[0]
  i2242.type = i2243[1]
  i2242.value = new pc.Vec4( i2243[2], i2243[3], i2243[4], i2243[5] )
  i2242.textureValue = i2243[6]
  i2242.shaderPropertyFlag = i2243[7]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2245 = data
  i2244.name = i2245[0]
  request.r(i2245[1], i2245[2], 0, i2244, 'texture')
  i2244.aabb = i2245[3]
  i2244.vertices = i2245[4]
  i2244.triangles = i2245[5]
  i2244.textureRect = UnityEngine.Rect.MinMaxRect(i2245[6], i2245[7], i2245[8], i2245[9])
  i2244.packedRect = UnityEngine.Rect.MinMaxRect(i2245[10], i2245[11], i2245[12], i2245[13])
  i2244.border = new pc.Vec4( i2245[14], i2245[15], i2245[16], i2245[17] )
  i2244.transparency = i2245[18]
  i2244.bounds = i2245[19]
  i2244.pixelsPerUnit = i2245[20]
  i2244.textureWidth = i2245[21]
  i2244.textureHeight = i2245[22]
  i2244.nativeSize = new pc.Vec2( i2245[23], i2245[24] )
  i2244.pivot = new pc.Vec2( i2245[25], i2245[26] )
  i2244.textureRectOffset = new pc.Vec2( i2245[27], i2245[28] )
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2247 = data
  i2246.name = i2247[0]
  i2246.ascent = i2247[1]
  i2246.originalLineHeight = i2247[2]
  i2246.fontSize = i2247[3]
  var i2249 = i2247[4]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2249[i + 0]) );
  }
  i2246.characterInfo = i2248
  request.r(i2247[5], i2247[6], 0, i2246, 'texture')
  i2246.originalFontSize = i2247[7]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2253 = data
  i2252.index = i2253[0]
  i2252.advance = i2253[1]
  i2252.bearing = i2253[2]
  i2252.glyphWidth = i2253[3]
  i2252.glyphHeight = i2253[4]
  i2252.minX = i2253[5]
  i2252.maxX = i2253[6]
  i2252.minY = i2253[7]
  i2252.maxY = i2253[8]
  i2252.uvBottomLeftX = i2253[9]
  i2252.uvBottomLeftY = i2253[10]
  i2252.uvBottomRightX = i2253[11]
  i2252.uvBottomRightY = i2253[12]
  i2252.uvTopLeftX = i2253[13]
  i2252.uvTopLeftY = i2253[14]
  i2252.uvTopRightX = i2253[15]
  i2252.uvTopRightY = i2253[16]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2255 = data
  i2254.name = i2255[0]
  i2254.bytes64 = i2255[1]
  i2254.data = i2255[2]
  return i2254
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i2257 = data
  var i2259 = i2257[0]
  var i2258 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i2259.length; i += 2) {
  request.r(i2259[i + 0], i2259[i + 1], 1, i2258, '')
  }
  i2256.components = i2258
  return i2256
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i2263 = data
  i2262.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i2263[0], i2262.mode)
  i2262.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i2263[1], i2262.neutralHDRRangeReductionMode)
  i2262.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i2263[2], i2262.acesPreset)
  i2262.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2263[3], i2262.hueShiftAmount)
  i2262.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i2263[4], i2262.detectPaperWhite)
  i2262.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2263[5], i2262.paperWhite)
  i2262.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i2263[6], i2262.detectBrightnessLimits)
  i2262.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2263[7], i2262.minNits)
  i2262.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2263[8], i2262.maxNits)
  i2262.active = !!i2263[9]
  return i2262
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i2265 = data
  i2264.m_Value = i2265[0]
  i2264.m_OverrideState = !!i2265[1]
  return i2264
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i2267 = data
  i2266.m_Value = i2267[0]
  i2266.m_OverrideState = !!i2267[1]
  return i2266
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i2269 = data
  i2268.m_Value = i2269[0]
  i2268.m_OverrideState = !!i2269[1]
  return i2268
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i2271 = data
  i2270.m_Value = i2271[0]
  i2270.m_OverrideState = !!i2271[1]
  return i2270
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i2273 = data
  i2272.m_Value = !!i2273[0]
  i2272.m_OverrideState = !!i2273[1]
  return i2272
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i2275 = data
  i2274.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2275[0], i2274.skipIterations)
  i2274.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i2275[1], i2274.threshold)
  i2274.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2275[2], i2274.intensity)
  i2274.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2275[3], i2274.scatter)
  i2274.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i2275[4], i2274.clamp)
  i2274.tint = request.d('UnityEngine.Rendering.ColorParameter', i2275[5], i2274.tint)
  i2274.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i2275[6], i2274.highQualityFiltering)
  i2274.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i2275[7], i2274.downscale)
  i2274.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2275[8], i2274.maxIterations)
  i2274.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i2275[9], i2274.dirtTexture)
  i2274.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2275[10], i2274.dirtIntensity)
  i2274.active = !!i2275[11]
  return i2274
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i2277 = data
  i2276.m_Value = i2277[0]
  i2276.m_OverrideState = !!i2277[1]
  return i2276
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i2279 = data
  i2278.m_Value = i2279[0]
  i2278.m_OverrideState = !!i2279[1]
  return i2278
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i2281 = data
  i2280.m_Value = new pc.Color(i2281[0], i2281[1], i2281[2], i2281[3])
  i2280.m_OverrideState = !!i2281[4]
  return i2280
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i2283 = data
  i2282.m_Value = i2283[0]
  i2282.m_OverrideState = !!i2283[1]
  return i2282
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i2285 = data
  i2284.dimension = i2285[0]
  request.r(i2285[1], i2285[2], 0, i2284, 'm_Value')
  i2284.m_OverrideState = !!i2285[3]
  return i2284
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i2287 = data
  i2286.color = request.d('UnityEngine.Rendering.ColorParameter', i2287[0], i2286.color)
  i2286.center = request.d('UnityEngine.Rendering.Vector2Parameter', i2287[1], i2286.center)
  i2286.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2287[2], i2286.intensity)
  i2286.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2287[3], i2286.smoothness)
  i2286.rounded = request.d('UnityEngine.Rendering.BoolParameter', i2287[4], i2286.rounded)
  i2286.active = !!i2287[5]
  return i2286
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i2289 = data
  i2288.m_Value = new pc.Vec2( i2289[0], i2289[1] )
  i2288.m_OverrideState = !!i2289[2]
  return i2288
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2290 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2291 = data
  i2290.hashCode = i2291[0]
  request.r(i2291[1], i2291[2], 0, i2290, 'material')
  i2290.materialHashCode = i2291[3]
  request.r(i2291[4], i2291[5], 0, i2290, 'atlas')
  i2290.normalStyle = i2291[6]
  i2290.normalSpacingOffset = i2291[7]
  i2290.boldStyle = i2291[8]
  i2290.boldSpacing = i2291[9]
  i2290.italicStyle = i2291[10]
  i2290.tabSize = i2291[11]
  i2290.m_Version = i2291[12]
  i2290.m_SourceFontFileGUID = i2291[13]
  request.r(i2291[14], i2291[15], 0, i2290, 'm_SourceFontFile_EditorRef')
  request.r(i2291[16], i2291[17], 0, i2290, 'm_SourceFontFile')
  i2290.m_AtlasPopulationMode = i2291[18]
  i2290.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2291[19], i2290.m_FaceInfo)
  var i2293 = i2291[20]
  var i2292 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.add(request.d('UnityEngine.TextCore.Glyph', i2293[i + 0]));
  }
  i2290.m_GlyphTable = i2292
  var i2295 = i2291[21]
  var i2294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.add(request.d('TMPro.TMP_Character', i2295[i + 0]));
  }
  i2290.m_CharacterTable = i2294
  var i2297 = i2291[22]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 2) {
  request.r(i2297[i + 0], i2297[i + 1], 2, i2296, '')
  }
  i2290.m_AtlasTextures = i2296
  i2290.m_AtlasTextureIndex = i2291[23]
  i2290.m_IsMultiAtlasTexturesEnabled = !!i2291[24]
  i2290.m_ClearDynamicDataOnBuild = !!i2291[25]
  var i2299 = i2291[26]
  var i2298 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.add(request.d('UnityEngine.TextCore.GlyphRect', i2299[i + 0]));
  }
  i2290.m_UsedGlyphRects = i2298
  var i2301 = i2291[27]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.add(request.d('UnityEngine.TextCore.GlyphRect', i2301[i + 0]));
  }
  i2290.m_FreeGlyphRects = i2300
  i2290.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2291[28], i2290.m_fontInfo)
  i2290.m_AtlasWidth = i2291[29]
  i2290.m_AtlasHeight = i2291[30]
  i2290.m_AtlasPadding = i2291[31]
  i2290.m_AtlasRenderMode = i2291[32]
  var i2303 = i2291[33]
  var i2302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.add(request.d('TMPro.TMP_Glyph', i2303[i + 0]));
  }
  i2290.m_glyphInfoList = i2302
  i2290.m_KerningTable = request.d('TMPro.KerningTable', i2291[34], i2290.m_KerningTable)
  i2290.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2291[35], i2290.m_FontFeatureTable)
  var i2305 = i2291[36]
  var i2304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2305.length; i += 2) {
  request.r(i2305[i + 0], i2305[i + 1], 1, i2304, '')
  }
  i2290.fallbackFontAssets = i2304
  var i2307 = i2291[37]
  var i2306 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2307.length; i += 2) {
  request.r(i2307[i + 0], i2307[i + 1], 1, i2306, '')
  }
  i2290.m_FallbackFontAssetTable = i2306
  i2290.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2291[38], i2290.m_CreationSettings)
  var i2309 = i2291[39]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('TMPro.TMP_FontWeightPair', i2309[i + 0]) );
  }
  i2290.m_FontWeightTable = i2308
  var i2311 = i2291[40]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('TMPro.TMP_FontWeightPair', i2311[i + 0]) );
  }
  i2290.fontWeights = i2310
  return i2290
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2313 = data
  i2312.m_FaceIndex = i2313[0]
  i2312.m_FamilyName = i2313[1]
  i2312.m_StyleName = i2313[2]
  i2312.m_PointSize = i2313[3]
  i2312.m_Scale = i2313[4]
  i2312.m_UnitsPerEM = i2313[5]
  i2312.m_LineHeight = i2313[6]
  i2312.m_AscentLine = i2313[7]
  i2312.m_CapLine = i2313[8]
  i2312.m_MeanLine = i2313[9]
  i2312.m_Baseline = i2313[10]
  i2312.m_DescentLine = i2313[11]
  i2312.m_SuperscriptOffset = i2313[12]
  i2312.m_SuperscriptSize = i2313[13]
  i2312.m_SubscriptOffset = i2313[14]
  i2312.m_SubscriptSize = i2313[15]
  i2312.m_UnderlineOffset = i2313[16]
  i2312.m_UnderlineThickness = i2313[17]
  i2312.m_StrikethroughOffset = i2313[18]
  i2312.m_StrikethroughThickness = i2313[19]
  i2312.m_TabWidth = i2313[20]
  return i2312
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2317 = data
  i2316.m_Index = i2317[0]
  i2316.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2317[1], i2316.m_Metrics)
  i2316.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2317[2], i2316.m_GlyphRect)
  i2316.m_Scale = i2317[3]
  i2316.m_AtlasIndex = i2317[4]
  i2316.m_ClassDefinitionType = i2317[5]
  return i2316
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2319 = data
  i2318.m_Width = i2319[0]
  i2318.m_Height = i2319[1]
  i2318.m_HorizontalBearingX = i2319[2]
  i2318.m_HorizontalBearingY = i2319[3]
  i2318.m_HorizontalAdvance = i2319[4]
  return i2318
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2321 = data
  i2320.m_X = i2321[0]
  i2320.m_Y = i2321[1]
  i2320.m_Width = i2321[2]
  i2320.m_Height = i2321[3]
  return i2320
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2324 = root || request.c( 'TMPro.TMP_Character' )
  var i2325 = data
  i2324.m_ElementType = i2325[0]
  i2324.m_Unicode = i2325[1]
  i2324.m_GlyphIndex = i2325[2]
  i2324.m_Scale = i2325[3]
  return i2324
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2330 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2331 = data
  i2330.Name = i2331[0]
  i2330.PointSize = i2331[1]
  i2330.Scale = i2331[2]
  i2330.CharacterCount = i2331[3]
  i2330.LineHeight = i2331[4]
  i2330.Baseline = i2331[5]
  i2330.Ascender = i2331[6]
  i2330.CapHeight = i2331[7]
  i2330.Descender = i2331[8]
  i2330.CenterLine = i2331[9]
  i2330.SuperscriptOffset = i2331[10]
  i2330.SubscriptOffset = i2331[11]
  i2330.SubSize = i2331[12]
  i2330.Underline = i2331[13]
  i2330.UnderlineThickness = i2331[14]
  i2330.strikethrough = i2331[15]
  i2330.strikethroughThickness = i2331[16]
  i2330.TabWidth = i2331[17]
  i2330.Padding = i2331[18]
  i2330.AtlasWidth = i2331[19]
  i2330.AtlasHeight = i2331[20]
  return i2330
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2334 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2335 = data
  i2334.id = i2335[0]
  i2334.x = i2335[1]
  i2334.y = i2335[2]
  i2334.width = i2335[3]
  i2334.height = i2335[4]
  i2334.xOffset = i2335[5]
  i2334.yOffset = i2335[6]
  i2334.xAdvance = i2335[7]
  i2334.scale = i2335[8]
  return i2334
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2336 = root || request.c( 'TMPro.KerningTable' )
  var i2337 = data
  var i2339 = i2337[0]
  var i2338 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.add(request.d('TMPro.KerningPair', i2339[i + 0]));
  }
  i2336.kerningPairs = i2338
  return i2336
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2342 = root || request.c( 'TMPro.KerningPair' )
  var i2343 = data
  i2342.xOffset = i2343[0]
  i2342.m_FirstGlyph = i2343[1]
  i2342.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2343[2], i2342.m_FirstGlyphAdjustments)
  i2342.m_SecondGlyph = i2343[3]
  i2342.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2343[4], i2342.m_SecondGlyphAdjustments)
  i2342.m_IgnoreSpacingAdjustments = !!i2343[5]
  return i2342
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2344 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2345 = data
  var i2347 = i2345[0]
  var i2346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2347[i + 0]));
  }
  i2344.m_GlyphPairAdjustmentRecords = i2346
  return i2344
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2350 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2351 = data
  i2350.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2351[0], i2350.m_FirstAdjustmentRecord)
  i2350.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2351[1], i2350.m_SecondAdjustmentRecord)
  i2350.m_FeatureLookupFlags = i2351[2]
  return i2350
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2352 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2353 = data
  i2352.m_GlyphIndex = i2353[0]
  i2352.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2353[1], i2352.m_GlyphValueRecord)
  return i2352
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2354 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2355 = data
  i2354.m_XPlacement = i2355[0]
  i2354.m_YPlacement = i2355[1]
  i2354.m_XAdvance = i2355[2]
  i2354.m_YAdvance = i2355[3]
  return i2354
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2358 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2359 = data
  i2358.sourceFontFileName = i2359[0]
  i2358.sourceFontFileGUID = i2359[1]
  i2358.pointSizeSamplingMode = i2359[2]
  i2358.pointSize = i2359[3]
  i2358.padding = i2359[4]
  i2358.packingMode = i2359[5]
  i2358.atlasWidth = i2359[6]
  i2358.atlasHeight = i2359[7]
  i2358.characterSetSelectionMode = i2359[8]
  i2358.characterSequence = i2359[9]
  i2358.referencedFontAssetGUID = i2359[10]
  i2358.referencedTextAssetGUID = i2359[11]
  i2358.fontStyle = i2359[12]
  i2358.fontStyleModifier = i2359[13]
  i2358.renderMode = i2359[14]
  i2358.includeFontFeatures = !!i2359[15]
  return i2358
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2362 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2363 = data
  request.r(i2363[0], i2363[1], 0, i2362, 'regularTypeface')
  request.r(i2363[2], i2363[3], 0, i2362, 'italicTypeface')
  return i2362
}

Deserializers["CaseDatabase"] = function (request, data, root) {
  var i2364 = root || request.c( 'CaseDatabase' )
  var i2365 = data
  var i2367 = i2365[0]
  var i2366 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i2367.length; i += 2) {
  request.r(i2367[i + 0], i2367[i + 1], 1, i2366, '')
  }
  i2364.caseMaterialList = i2366
  return i2364
}

Deserializers["GoodsDatabase"] = function (request, data, root) {
  var i2370 = root || request.c( 'GoodsDatabase' )
  var i2371 = data
  var i2373 = i2371[0]
  var i2372 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 1, i2372, '')
  }
  i2370.goodsMaterialList = i2372
  return i2370
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2374 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2375 = data
  i2374.useSafeMode = !!i2375[0]
  i2374.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2375[1], i2374.safeModeOptions)
  i2374.timeScale = i2375[2]
  i2374.unscaledTimeScale = i2375[3]
  i2374.useSmoothDeltaTime = !!i2375[4]
  i2374.maxSmoothUnscaledTime = i2375[5]
  i2374.rewindCallbackMode = i2375[6]
  i2374.showUnityEditorReport = !!i2375[7]
  i2374.logBehaviour = i2375[8]
  i2374.drawGizmos = !!i2375[9]
  i2374.defaultRecyclable = !!i2375[10]
  i2374.defaultAutoPlay = i2375[11]
  i2374.defaultUpdateType = i2375[12]
  i2374.defaultTimeScaleIndependent = !!i2375[13]
  i2374.defaultEaseType = i2375[14]
  i2374.defaultEaseOvershootOrAmplitude = i2375[15]
  i2374.defaultEasePeriod = i2375[16]
  i2374.defaultAutoKill = !!i2375[17]
  i2374.defaultLoopType = i2375[18]
  i2374.debugMode = !!i2375[19]
  i2374.debugStoreTargetId = !!i2375[20]
  i2374.showPreviewPanel = !!i2375[21]
  i2374.storeSettingsLocation = i2375[22]
  i2374.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2375[23], i2374.modules)
  i2374.createASMDEF = !!i2375[24]
  i2374.showPlayingTweens = !!i2375[25]
  i2374.showPausedTweens = !!i2375[26]
  return i2374
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2376 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2377 = data
  i2376.logBehaviour = i2377[0]
  i2376.nestedTweenFailureBehaviour = i2377[1]
  return i2376
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2378 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2379 = data
  i2378.showPanel = !!i2379[0]
  i2378.audioEnabled = !!i2379[1]
  i2378.physicsEnabled = !!i2379[2]
  i2378.physics2DEnabled = !!i2379[3]
  i2378.spriteEnabled = !!i2379[4]
  i2378.uiEnabled = !!i2379[5]
  i2378.textMeshProEnabled = !!i2379[6]
  i2378.tk2DEnabled = !!i2379[7]
  i2378.deAudioEnabled = !!i2379[8]
  i2378.deUnityExtendedEnabled = !!i2379[9]
  i2378.epoOutlineEnabled = !!i2379[10]
  return i2378
}

Deserializers["UnityEditor.Rendering.Universal.AssetVersion"] = function (request, data, root) {
  var i2380 = root || request.c( 'UnityEditor.Rendering.Universal.AssetVersion' )
  var i2381 = data
  i2380.version = i2381[0]
  return i2380
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2382 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2383 = data
  i2382.hashCode = i2383[0]
  request.r(i2383[1], i2383[2], 0, i2382, 'material')
  i2382.materialHashCode = i2383[3]
  request.r(i2383[4], i2383[5], 0, i2382, 'spriteSheet')
  var i2385 = i2383[6]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.add(request.d('TMPro.TMP_Sprite', i2385[i + 0]));
  }
  i2382.spriteInfoList = i2384
  var i2387 = i2383[7]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2387.length; i += 2) {
  request.r(i2387[i + 0], i2387[i + 1], 1, i2386, '')
  }
  i2382.fallbackSpriteAssets = i2386
  i2382.m_Version = i2383[8]
  i2382.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2383[9], i2382.m_FaceInfo)
  var i2389 = i2383[10]
  var i2388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.add(request.d('TMPro.TMP_SpriteCharacter', i2389[i + 0]));
  }
  i2382.m_SpriteCharacterTable = i2388
  var i2391 = i2383[11]
  var i2390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.add(request.d('TMPro.TMP_SpriteGlyph', i2391[i + 0]));
  }
  i2382.m_SpriteGlyphTable = i2390
  return i2382
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2394 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2395 = data
  i2394.name = i2395[0]
  i2394.hashCode = i2395[1]
  i2394.unicode = i2395[2]
  i2394.pivot = new pc.Vec2( i2395[3], i2395[4] )
  request.r(i2395[5], i2395[6], 0, i2394, 'sprite')
  i2394.id = i2395[7]
  i2394.x = i2395[8]
  i2394.y = i2395[9]
  i2394.width = i2395[10]
  i2394.height = i2395[11]
  i2394.xOffset = i2395[12]
  i2394.yOffset = i2395[13]
  i2394.xAdvance = i2395[14]
  i2394.scale = i2395[15]
  return i2394
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2400 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2401 = data
  i2400.m_Name = i2401[0]
  i2400.m_HashCode = i2401[1]
  i2400.m_ElementType = i2401[2]
  i2400.m_Unicode = i2401[3]
  i2400.m_GlyphIndex = i2401[4]
  i2400.m_Scale = i2401[5]
  return i2400
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2404 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2405 = data
  request.r(i2405[0], i2405[1], 0, i2404, 'sprite')
  i2404.m_Index = i2405[2]
  i2404.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2405[3], i2404.m_Metrics)
  i2404.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2405[4], i2404.m_GlyphRect)
  i2404.m_Scale = i2405[5]
  i2404.m_AtlasIndex = i2405[6]
  i2404.m_ClassDefinitionType = i2405[7]
  return i2404
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2406 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2407 = data
  var i2409 = i2407[0]
  var i2408 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.add(request.d('TMPro.TMP_Style', i2409[i + 0]));
  }
  i2406.m_StyleList = i2408
  return i2406
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2412 = root || request.c( 'TMPro.TMP_Style' )
  var i2413 = data
  i2412.m_Name = i2413[0]
  i2412.m_HashCode = i2413[1]
  i2412.m_OpeningDefinition = i2413[2]
  i2412.m_ClosingDefinition = i2413[3]
  i2412.m_OpeningTagArray = i2413[4]
  i2412.m_ClosingTagArray = i2413[5]
  i2412.m_OpeningTagUnicodeArray = i2413[6]
  i2412.m_ClosingTagUnicodeArray = i2413[7]
  return i2412
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2414 = root || request.c( 'TMPro.TMP_Settings' )
  var i2415 = data
  i2414.m_enableWordWrapping = !!i2415[0]
  i2414.m_enableKerning = !!i2415[1]
  i2414.m_enableExtraPadding = !!i2415[2]
  i2414.m_enableTintAllSprites = !!i2415[3]
  i2414.m_enableParseEscapeCharacters = !!i2415[4]
  i2414.m_EnableRaycastTarget = !!i2415[5]
  i2414.m_GetFontFeaturesAtRuntime = !!i2415[6]
  i2414.m_missingGlyphCharacter = i2415[7]
  i2414.m_warningsDisabled = !!i2415[8]
  request.r(i2415[9], i2415[10], 0, i2414, 'm_defaultFontAsset')
  i2414.m_defaultFontAssetPath = i2415[11]
  i2414.m_defaultFontSize = i2415[12]
  i2414.m_defaultAutoSizeMinRatio = i2415[13]
  i2414.m_defaultAutoSizeMaxRatio = i2415[14]
  i2414.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2415[15], i2415[16] )
  i2414.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2415[17], i2415[18] )
  i2414.m_autoSizeTextContainer = !!i2415[19]
  i2414.m_IsTextObjectScaleStatic = !!i2415[20]
  var i2417 = i2415[21]
  var i2416 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2417.length; i += 2) {
  request.r(i2417[i + 0], i2417[i + 1], 1, i2416, '')
  }
  i2414.m_fallbackFontAssets = i2416
  i2414.m_matchMaterialPreset = !!i2415[22]
  request.r(i2415[23], i2415[24], 0, i2414, 'm_defaultSpriteAsset')
  i2414.m_defaultSpriteAssetPath = i2415[25]
  i2414.m_enableEmojiSupport = !!i2415[26]
  i2414.m_MissingCharacterSpriteUnicode = i2415[27]
  i2414.m_defaultColorGradientPresetsPath = i2415[28]
  request.r(i2415[29], i2415[30], 0, i2414, 'm_defaultStyleSheet')
  i2414.m_StyleSheetsResourcePath = i2415[31]
  request.r(i2415[32], i2415[33], 0, i2414, 'm_leadingCharacters')
  request.r(i2415[34], i2415[35], 0, i2414, 'm_followingCharacters')
  i2414.m_UseModernHangulLineBreakingRules = !!i2415[36]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2419 = data
  var i2421 = i2419[0]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2421[i + 0]) );
  }
  i2418.files = i2420
  i2418.componentToPrefabIds = i2419[1]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2425 = data
  i2424.path = i2425[0]
  request.r(i2425[1], i2425[2], 0, i2424, 'unityObject')
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2427 = data
  var i2429 = i2427[0]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2429[i + 0]) );
  }
  i2426.scriptsExecutionOrder = i2428
  var i2431 = i2427[1]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2431[i + 0]) );
  }
  i2426.sortingLayers = i2430
  var i2433 = i2427[2]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2433[i + 0]) );
  }
  i2426.cullingLayers = i2432
  i2426.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2427[3], i2426.timeSettings)
  i2426.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2427[4], i2426.physicsSettings)
  i2426.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2427[5], i2426.physics2DSettings)
  i2426.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2427[6], i2426.qualitySettings)
  i2426.enableRealtimeShadows = !!i2427[7]
  i2426.enableAutoInstancing = !!i2427[8]
  i2426.enableDynamicBatching = !!i2427[9]
  i2426.lightmapEncodingQuality = i2427[10]
  i2426.desiredColorSpace = i2427[11]
  var i2435 = i2427[12]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( i2435[i + 0] );
  }
  i2426.allTags = i2434
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2439 = data
  i2438.name = i2439[0]
  i2438.value = i2439[1]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2443 = data
  i2442.id = i2443[0]
  i2442.name = i2443[1]
  i2442.value = i2443[2]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2447 = data
  i2446.id = i2447[0]
  i2446.name = i2447[1]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2449 = data
  i2448.fixedDeltaTime = i2449[0]
  i2448.maximumDeltaTime = i2449[1]
  i2448.timeScale = i2449[2]
  i2448.maximumParticleTimestep = i2449[3]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2451 = data
  i2450.gravity = new pc.Vec3( i2451[0], i2451[1], i2451[2] )
  i2450.defaultSolverIterations = i2451[3]
  i2450.bounceThreshold = i2451[4]
  i2450.autoSyncTransforms = !!i2451[5]
  i2450.autoSimulation = !!i2451[6]
  var i2453 = i2451[7]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2453[i + 0]) );
  }
  i2450.collisionMatrix = i2452
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2457 = data
  i2456.enabled = !!i2457[0]
  i2456.layerId = i2457[1]
  i2456.otherLayerId = i2457[2]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2459 = data
  request.r(i2459[0], i2459[1], 0, i2458, 'material')
  i2458.gravity = new pc.Vec2( i2459[2], i2459[3] )
  i2458.positionIterations = i2459[4]
  i2458.velocityIterations = i2459[5]
  i2458.velocityThreshold = i2459[6]
  i2458.maxLinearCorrection = i2459[7]
  i2458.maxAngularCorrection = i2459[8]
  i2458.maxTranslationSpeed = i2459[9]
  i2458.maxRotationSpeed = i2459[10]
  i2458.baumgarteScale = i2459[11]
  i2458.baumgarteTOIScale = i2459[12]
  i2458.timeToSleep = i2459[13]
  i2458.linearSleepTolerance = i2459[14]
  i2458.angularSleepTolerance = i2459[15]
  i2458.defaultContactOffset = i2459[16]
  i2458.autoSimulation = !!i2459[17]
  i2458.queriesHitTriggers = !!i2459[18]
  i2458.queriesStartInColliders = !!i2459[19]
  i2458.callbacksOnDisable = !!i2459[20]
  i2458.reuseCollisionCallbacks = !!i2459[21]
  i2458.autoSyncTransforms = !!i2459[22]
  var i2461 = i2459[23]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2461[i + 0]) );
  }
  i2458.collisionMatrix = i2460
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2465 = data
  i2464.enabled = !!i2465[0]
  i2464.layerId = i2465[1]
  i2464.otherLayerId = i2465[2]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2467 = data
  var i2469 = i2467[0]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2469[i + 0]) );
  }
  i2466.qualityLevels = i2468
  var i2471 = i2467[1]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( i2471[i + 0] );
  }
  i2466.names = i2470
  i2466.shadows = i2467[2]
  i2466.anisotropicFiltering = i2467[3]
  i2466.antiAliasing = i2467[4]
  i2466.lodBias = i2467[5]
  i2466.shadowCascades = i2467[6]
  i2466.shadowDistance = i2467[7]
  i2466.shadowmaskMode = i2467[8]
  i2466.shadowProjection = i2467[9]
  i2466.shadowResolution = i2467[10]
  i2466.softParticles = !!i2467[11]
  i2466.softVegetation = !!i2467[12]
  i2466.activeColorSpace = i2467[13]
  i2466.desiredColorSpace = i2467[14]
  i2466.masterTextureLimit = i2467[15]
  i2466.maxQueuedFrames = i2467[16]
  i2466.particleRaycastBudget = i2467[17]
  i2466.pixelLightCount = i2467[18]
  i2466.realtimeReflectionProbes = !!i2467[19]
  i2466.shadowCascade2Split = i2467[20]
  i2466.shadowCascade4Split = new pc.Vec3( i2467[21], i2467[22], i2467[23] )
  i2466.streamingMipmapsActive = !!i2467[24]
  i2466.vSyncCount = i2467[25]
  i2466.asyncUploadBufferSize = i2467[26]
  i2466.asyncUploadTimeSlice = i2467[27]
  i2466.billboardsFaceCameraPosition = !!i2467[28]
  i2466.shadowNearPlaneOffset = i2467[29]
  i2466.streamingMipmapsMemoryBudget = i2467[30]
  i2466.maximumLODLevel = i2467[31]
  i2466.streamingMipmapsAddAllCameras = !!i2467[32]
  i2466.streamingMipmapsMaxLevelReduction = i2467[33]
  i2466.streamingMipmapsRenderersPerFrame = i2467[34]
  i2466.resolutionScalingFixedDPIFactor = i2467[35]
  i2466.streamingMipmapsMaxFileIORequests = i2467[36]
  i2466.currentQualityLevel = i2467[37]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2477 = data
  i2476.weight = i2477[0]
  i2476.vertices = i2477[1]
  i2476.normals = i2477[2]
  i2476.tangents = i2477[3]
  return i2476
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2478 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2479 = data
  i2478.xPlacement = i2479[0]
  i2478.yPlacement = i2479[1]
  i2478.xAdvance = i2479[2]
  i2478.yAdvance = i2479[3]
  return i2478
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

Deserializers.creativeName = "Subject-Test-Build";

Deserializers.lunaAppID = "0";

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

Deserializers.buildID = "21b073c8-a584-441b-b7e0-1178b5cd35b0";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

