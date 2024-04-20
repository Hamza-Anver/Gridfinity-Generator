const model_path = 'gridfinity_bins/gridfinity_basic_cup.scad';  // folder name (actually zip file) and source file name
  
    const outstl_name = 'model_out.stl';
  
    const model_default_params = {
      width: 1,
      depth: 1,
      height: 6,
      magnet_diameter: 0,
      screw_depth: 0,
      hole_overhang_remedy: true,
      chambers: 1,
      withLabel: "disabled",
      fingerslide: true,
      labelWidth: 0,
      wall_thickness: 0.95,
      efficient_floor: false,
      lip_style: "normal",
    };
    
    const model_param_desriptions = {
      width: "Number of grid units left-to-right (x axis)",
      depth: "Number of grid units front-to-back (y axis)",
      height: "Height of bin (multiples of 7mm)",
      magnet_diameter: "Magnet hole diameter",
      screw_depth: "Include deeper narrow hole for screw (Zack's design is 6 mm) or 0 to omit screw hole",
      hole_overhang_remedy: "If both screw and magnet are defined, include feature for better printing of magnet/screw overhang",
      chambers: "Number of subdivisions along x axis (uniform divisions)",
      withLabel: "Include overhang for label and control position, can be 'disabled', 'left', 'right', 'center', 'leftchanber', 'rightchamber', or 'centerchamber'",
      fingerslide: "Include large corner fillet on the front",
      labelWidth: "Width of label in number of units, or zero to indicate full width",
      wall_thickness: "Thickness of outer walls (Zack's design is 0.95)",
      efficient_floor: "Efficient floor option saves material and time, but the floor is not smooth (only applies if no magnets, screws, or finger-slide used)",
      lip_style: "Style of lip at top of walls, can be 'normal', 'reduced', or 'none'",
    };
    
    (async() => {
      if ('serviceWorker' in navigator) {
        for (const reg of await navigator.serviceWorker.getRegistrations()) {
          try {
            reg.unregister()
          } catch (e) {
            console.error(e, e.stackTrace);
          }
        }
      }
    })();