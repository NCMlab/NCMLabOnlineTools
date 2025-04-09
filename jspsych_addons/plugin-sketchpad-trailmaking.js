var jsPsychSketchpadTrailMaking = (function (jspsych) {
  "use strict";

  const info = {
    name: "sketchpad",
    parameters: {
      /**
       * The shape of the canvas element. Accepts `'rectangle'` or `'circle'`
       */

      Loc: {
        type: jspsych.ParameterType.INT,
        default: 10,
      },
      Circles: {
        type: jspsych.ParameterType.INT,
        default: -99,
      },
      canvas_shape: {
        type: jspsych.ParameterType.STRING,
        default: "rectangle",
      },
      /**
       * Width of the canvas in pixels.
       */
      canvas_width: {
        type: jspsych.ParameterType.INT,
        default: 800,
      },
      /**
       * Width of the canvas in pixels.
       */
      canvas_height: {
        type: jspsych.ParameterType.INT,
        default: 800,
      },
      /**
       * Diameter of the canvas (when `canvas_shape` is `'circle'`) in pixels.
       */
      canvas_diameter: {
        type: jspsych.ParameterType.INT,
        default: 500,
      },
      /**
       * This width of the border around the canvas element
       */
      canvas_border_width: {
        type: jspsych.ParameterType.INT,
        default: 0,
      },
      /**
       * The color of the border around the canvas element.
       */
      canvas_border_color: {
        type: jspsych.ParameterType.STRING,
        default: "#000",
      },
      /**
       * Path to an image to render as the background of the canvas.
       */
      background_image: {
        type: jspsych.ParameterType.IMAGE,
        default: null,
      },
      /**
       * Background color of the canvas.
       */
      background_color: {
        type: jspsych.ParameterType.STRING,
        default: "#ffffff",
      },
      /**
       * The width of the strokes on the canvas.
       */
      stroke_width: {
        type: jspsych.ParameterType.INT,
        default: 2,
      },
      /**
       * The color of the stroke on the canvas
       */
      stroke_color: {
        type: jspsych.ParameterType.STRING,
        default: "#000000",
      },
      /**
       * An array of colors to render as a palette of options for stroke colors.
       */
      stroke_color_palette: {
        type: jspsych.ParameterType.STRING,
        array: true,
        default: [],
      },
      /**
       * HTML content to render above or below the canvas (use `prompt_location` parameter to change location).
       */
      prompt: {
        type: jspsych.ParameterType.HTML_STRING,
        default: null,
      },
      /**
       * Location of the `prompt` content. Can be 'abovecanvas' or 'belowcanvas' or 'belowbutton'.
       */
      prompt_location: {
        type: jspsych.ParameterType.STRING,
        default: "abovecanvas",
      },
      /**
       * Whether to save the final image in the data as dataURL
       */
      save_final_image: {
        type: jspsych.ParameterType.BOOL,
        default: true,
      },
      /**
       * Whether to save the set of strokes that generated the image
       */
      save_strokes: {
        type: jspsych.ParameterType.BOOL,
        default: true,
      },
      /**
       * If this key is held down then it is like the mouse button being clicked for controlling
       * the flow of the "ink".
       */
      key_to_draw: {
        type: jspsych.ParameterType.KEY,
        default: null,
      },
      /**
       * Whether to show the button that ends the trial
       */
      show_finished_button: {
        type: jspsych.ParameterType.BOOL,
        default: true,
      },
      /**
       * The label for the button that ends the trial
       */
      finished_button_label: {
        type: jspsych.ParameterType.STRING,
        default: "Finished",
      },
      /**
       * Whether to show the button that clears the entire drawing.
       */
      show_clear_button: {
        type: jspsych.ParameterType.BOOL,
        default: true,
      },
      /**
       * The label for the button that clears the entire drawing.
       */
      clear_button_label: {
        type: jspsych.ParameterType.STRING,
        default: "Clear",
      },
      /**
       * Whether to show the button that enables an undo action.
       */
      show_undo_button: {
        type: jspsych.ParameterType.BOOL,
        default: true,
      },
      /**
       * The label for the button that performs an undo action.
       */
      undo_button_label: {
        type: jspsych.ParameterType.STRING,
        default: "Undo",
      },
      /**
       * Whether to show the button that enables an redo action. `show_undo_button` must also
       * be `true` for the redo button to show.
       */
      show_redo_button: {
        type: jspsych.ParameterType.BOOL,
        default: true,
      },
      /**
       * The label for the button that performs an redo action.
       */
      redo_button_label: {
        type: jspsych.ParameterType.STRING,
        default: "Redo",
      },
      /**
       * Array of keys that will end the trial when pressed.
       */
      choices: {
        type: jspsych.ParameterType.KEYS,
        default: "NO_KEYS",
      },
      /**
       * Length of time before trial ends. If `null` the trial will not timeout.
       */
      trial_duration: {
        type: jspsych.ParameterType.INT,
        default: 1000 * 60 * 3,
      },
      /**
       * Whether to show a countdown timer for the remaining trial duration
       */
      show_countdown_trial_duration: {
        type: jspsych.ParameterType.BOOL,
        default: true,
      },
      /**
       * The html for the countdown timer.
       */
      countdown_timer_html: {
        type: jspsych.ParameterType.HTML_STRING,
        default: `<span id="sketchpad-timer"></span> remaining`,
      },
      /* Change circle color ONLY when correct or when entering ANY circle
       */
      change_circle_color_only_when_correct: {
        type: jspsych.ParameterType.BOOL,
        default: true,
      },
      first_circle_label: {
        type: jspsych.ParameterType.STRING,
        default: "begin",
      },
      last_circle_label: {
        type: jspsych.ParameterType.STRING,
        default: "end",
      },
      GIFRecord: {
        type: jspsych.ParameterType.BOOL,
        default: false,
      },
    },
  };
  /**
   * **sketchpad**
   *
   * jsPsych plugin for displaying a canvas stimulus and getting a slider response
   *
   * @author Josh de Leeuw
   * @see {@link https://www.jspsych.org/latest/plugins/sketchpad/ sketchpad plugin documentation on jspsych.org}
   */
  class SketchpadPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
      this.is_drawing = false;
      this.strokes = [];
      this.stroke = [];
      this.undo_history = [];
      this.mouse_position = { x: 0, y: 0 };
      this.draw_key_held = false;
      this.InCircle = false;
      this.InCorrectCircle = false;
      this.InsideWhichCircle = -99;
      console.log(this);
    }
    trial(display_element, trial, on_load) {
      this.display = display_element;
      this.params = trial;
      this.current_stroke_color = trial.stroke_color;
      this.init_display();
      console.log(this.params);

      this.setup_event_listeners();
      this.add_background_color();
      this.Circles = this.convert_circles_locations(
        this.params.Circles,
        LocationsAsProportions,
        this.params.canvas_width,
        this.params.canvas_height
      );
      for (var i = 0; i < this.params.Circles.length; i++) {
        this.add_circles(
          this.params.Circles[i].centerX,
          this.params.Circles[i].centerY,
          this.params.Circles[i].radius,
          CircleColor,
          LocationsAsProportions,
          this.params.canvas_width,
          this.params.canvas_height
        );
        this.add_text(
          this.params.Circles[i].centerX,
          this.params.Circles[i].centerY,
          this.params.Circles[i].label,
          LocationsAsProportions,
          this.params.canvas_width,
          this.params.canvas_height
        );
        // label the first circle
        if (i == 0) {
          this.add_text(
            this.params.Circles[i].centerX,
            this.params.Circles[i].centerY - 2 * this.params.Circles[i].radius,
            this.params.first_circle_label,
            LocationsAsProportions,
            this.params.canvas_width,
            this.params.canvas_height
          );
        }
        if (i == this.params.Circles.length - 1) {
          this.add_text(
            this.params.Circles[i].centerX,
            this.params.Circles[i].centerY - 2 * this.params.Circles[i].radius,
            this.params.last_circle_label,
            LocationsAsProportions,
            this.params.canvas_width,
            this.params.canvas_height
          );
        }
        if ((i < 3) & (i > 0)) {
          this.add_line(
            this.params.Circles[i - 1].centerX,
            this.params.Circles[i - 1].centerY,
            this.params.Circles[i].centerX,
            this.params.Circles[i].centerY,
            this.params.Circles[i].radius
          );
          this.add_arrowHead(
            this.params.Circles[i - 1].centerX,
            this.params.Circles[i - 1].centerY,
            this.params.Circles[i].centerX,
            this.params.Circles[i].centerY,
            this.params.Circles[i].radius
          );
          //this.add_line(this.params.Circles[1].centerX, this.params.Circles[1].centerY, this.params.Circles[2].centerX, this.params.Circles[2].centerY,this.params.Circles[i].radius)
        }
      }
      var OutData = [];
      for (var i = 0; i < this.params.Circles.length; i++) {
        OutData[i] = {
          Count: -99,
          Label: -99,
          EnterLocTime: -99,
          LeaveLocTime: -99,
        };
      }

      // Make the output data structure
      this.OutData = OutData;
      this.ErrorCount = 0;
      // define which circles have been found so far
      this.CompletedCircle = 0;
      // define whether the cursor is in a circle or not

      this.add_background_image().then(() => {
        on_load();
      });
      this.start_time = performance.now();
      this.set_trial_duration_timer();
      if (this.params.GIFRecord) {
        this.enc = encoder;
        this.enc.start();
        this.capture_frame();
      }
      return new Promise((resolve, reject) => {
        this.trial_finished_handler = resolve;
      });
    }
    init_display() {
      this.add_css();
      let canvas_html;
      if (this.params.canvas_shape == "rectangle") {
        canvas_html = `
          <canvas id="sketchpad-canvas" 
          width="${this.params.canvas_width}" 
          height="${this.params.canvas_height}"
          left=0px
  
          style="border:3px solid" 
          class="sketchpad-rectangle"></canvas>
        `;
      } else if (this.params.canvas_shape == "circle") {
        canvas_html = `
          <canvas id="sketchpad-canvas" 
          width="${this.params.canvas_diameter}" 
          height="${this.params.canvas_diameter}" 
          class="sketchpad-circle">
          </canvas>
        `;
      } else {
        throw new Error(
          '`canvas_shape` parameter in sketchpad plugin must be either "rectangle" or "circle"'
        );
      }

      let sketchpad_controls = `<div id="sketchpad-controls">`;
      sketchpad_controls += `<div id="sketchpad-color-palette">`;
      for (const color of this.params.stroke_color_palette) {
        sketchpad_controls += `<button class="sketchpad-color-select" data-color="${color}" style="background-color:${color};"></button>`;
      }
      sketchpad_controls += `</div>`;
      sketchpad_controls += `<div id="sketchpad-actions">`;
      if (this.params.show_clear_button) {
        sketchpad_controls += `<button class="jspsych-btn" id="sketchpad-clear" disabled>${this.params.clear_button_label}</button>`;
      }
      if (this.params.show_undo_button) {
        sketchpad_controls += `<button class="jspsych-btn" id="sketchpad-undo" disabled>${this.params.undo_button_label}</button>`;
        if (this.params.show_redo_button) {
          sketchpad_controls += `<button class="jspsych-btn" id="sketchpad-redo" disabled>${this.params.redo_button_label}</button>`;
        }
      }
      sketchpad_controls += `</div></div>`;
      canvas_html += sketchpad_controls;
      let finish_button_html = "";
      if (this.params.show_finished_button) {
        finish_button_html = `<p id="finish-btn"><button class="jspsych-btn" id="sketchpad-end">${this.params.finished_button_label}</button></p>`;
      }
      let timer_html = "";
      if (
        this.params.show_countdown_trial_duration &&
        this.params.trial_duration
      ) {
        timer_html = `<p id="countdown-timer">${this.params.countdown_timer_html}</p>`;
      }

      let display_html;
      if (this.params.prompt !== null) {
        if (this.params.prompt_location == "abovecanvas") {
          console.log("ABOVE CANVAS");
          display_html =
            this.params.prompt +
            canvas_html +
            '<table  style="width:50%"><tr><td text-align="right">' +
            finish_button_html +
            '</td><td style="text-align:left">' +
            timer_html +
            "</td></tr></table>";
        }
        if (this.params.prompt_location == "belowcanvas") {
          display_html =
            canvas_html +
            this.params.prompt +
            '<table  style="width:50%"><tr><td text-align="right">' +
            finish_button_html +
            '</td><td style="text-align:left">' +
            timer_html +
            "</td></tr></table>";
        }
        if (this.params.prompt_location == "belowbutton") {
          display_html =
            canvas_html + finish_button_html + this.params.prompt + timer_html;
          console.log("BELOW");
        }
        if (this.params.prompt_location == "loc") {
          display_html =
            canvas_html + finish_button_html + this.params.prompt + timer_html;
          console.log("LOC");
        }
      } else {
        //display_html = canvas_html + '<table><tr><td>'+finish_button_html+'</td><td>' + timer_html +'</td></tr></table>';
        display_html =
          '<table style="border:0px;padding:0px;margin:0px;border-spacing:0px"><tr style="width:100%;border:0px;padding:0px;margin:0px;border-spacing:0px"><td>' +
          finish_button_html +
          '</td><td style="text-align:left">' +
          timer_html +
          "</td></tr></table>" +
          canvas_html;
        //display_html = finish_button_html + timer_html + canvas_html

        console.log("ELSE");
      }
      this.display.innerHTML = display_html;
      this.sketchpad = this.display.querySelector("#sketchpad-canvas");
      this.ctx = this.sketchpad.getContext("2d");
    }
    setup_event_listeners() {
      document.addEventListener("pointermove", (e) => {
        this.mouse_position = { x: e.clientX, y: e.clientY };
      });
      if (this.params.show_finished_button) {
        this.display
          .querySelector("#sketchpad-end")
          .addEventListener("click", () => {
            this.end_trial("button");
          });
      }
      this.sketchpad.addEventListener("pointerdown", this.start_draw);
      this.sketchpad.addEventListener("pointermove", this.move_draw);
      this.sketchpad.addEventListener("pointerup", this.end_draw);
      this.sketchpad.addEventListener("pointerleave", this.end_draw);
      this.sketchpad.addEventListener("pointercancel", this.end_draw);
      if (this.params.key_to_draw !== null) {
        document.addEventListener("keydown", (e) => {
          if (
            e.key == this.params.key_to_draw &&
            !this.is_drawing &&
            !this.draw_key_held
          ) {
            this.draw_key_held = true;
            if (
              document.elementFromPoint(
                this.mouse_position.x,
                this.mouse_position.y
              ) == this.sketchpad
            ) {
              this.sketchpad.dispatchEvent(
                new PointerEvent("pointerdown", {
                  clientX: this.mouse_position.x,
                  clientY: this.mouse_position.y,
                })
              );
            }
          }
        });
        document.addEventListener("keyup", (e) => {
          if (e.key == this.params.key_to_draw) {
            this.draw_key_held = false;
            if (
              document.elementFromPoint(
                this.mouse_position.x,
                this.mouse_position.y
              ) == this.sketchpad
            ) {
              this.sketchpad.dispatchEvent(
                new PointerEvent("pointerup", {
                  clientX: this.mouse_position.x,
                  clientY: this.mouse_position.y,
                })
              );
            }
          }
        });
      }
      if (this.params.show_undo_button) {
        this.display
          .querySelector("#sketchpad-undo")
          .addEventListener("click", this.undo);
        if (this.params.show_redo_button) {
          this.display
            .querySelector("#sketchpad-redo")
            .addEventListener("click", this.redo);
        }
      }
      if (this.params.show_clear_button) {
        this.display
          .querySelector("#sketchpad-clear")
          .addEventListener("click", this.clear);
      }
      const color_btns = Array.from(
        this.display.querySelectorAll(".sketchpad-color-select")
      );
      for (const btn of color_btns) {
        btn.addEventListener("click", (e) => {
          const target = e.target;
          this.current_stroke_color = target.getAttribute("data-color");
        });
      }
      this.jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: this.after_key_response,
        valid_responses: this.params.choices,
        persist: false,
        allow_held_key: false,
      });
    }
    add_css() {
      document.querySelector("head").insertAdjacentHTML(
        "beforeend",
        `<style id="sketchpad-styles">
          #sketchpad-controls {
            line-height: 1; 
            width:${
              this.params.canvas_shape == "rectangle"
                ? this.params.canvas_width + this.params.canvas_border_width * 2
                : this.params.canvas_diameter +
                  this.params.canvas_border_width * 2
            }px; 
            display: flex; 
            justify-content: space-between; 
            flex-wrap: wrap;
            margin: auto;
          }
          #sketchpad-color-palette { 
            display: inline-block; text-align:left; flex-grow: 1;
          }
          .sketchpad-color-select { 
            cursor: pointer; height: 33px; width: 33px; border-radius: 4px; padding: 0; border: 1px solid #ccc; 
          }
          #sketchpad-actions {
            display:inline-block; text-align:right; flex-grow: 1;
          }
          #sketchpad-actions button {
            margin-left: 4px;
          }
          #sketchpad-canvas {
            touch-action: none;
            border: ${this.params.canvas_border_width}px solid ${
          this.params.canvas_border_color
        };
          }
          .sketchpad-circle {
            border-radius: ${this.params.canvas_diameter / 2}px;
          }
          #countdown-timer {
            width:${
              this.params.canvas_shape == "rectangle"
                ? this.params.canvas_width * 0.75 +
                  this.params.canvas_border_width * 0.5
                : this.params.canvas_diameter +
                  this.params.canvas_border_width * 2
            }px; 
            text-align: right;
            font-size: 24px; 
            margin-bottom: 0.2em;
          }
        </style>`
      );
    }
    add_background_color() {
      this.ctx.fillStyle = this.params.background_color;
      if (this.params.canvas_shape == "rectangle") {
        this.ctx.fillRect(
          0,
          0,
          this.params.canvas_width,
          this.params.canvas_height
        );
      }
      if (this.params.canvas_shape == "circle") {
        this.ctx.fillRect(
          0,
          0,
          this.params.canvas_diameter,
          this.params.canvas_diameter
        );
      }
    }

    add_text(
      centerX,
      centerY,
      label,
      AsProp = false,
      WindowX = 200,
      WindowY = 200
    ) {
      //this.ctx.font = "20px Georgia";
      this.ctx.fillStyle = "black";
      this.ctx.font = TextFont;
      this.ctx.textAlign = "center";
      // In order to center text labels in the circles, the height of the text needs to be determined
      // This is done with the measureText built in function
      const h = this.ctx.measureText(label);
      // The height is determined
      const actualHeight =
        h.actualBoundingBoxAscent + h.actualBoundingBoxDescent;
      // The labels are offset by half the height
      this.ctx.fillText(label, centerX, centerY + actualHeight / 2);
    }
    add_line(centerX_start, centerY_start, centerX_stop, centerY_stop, radius) {
      // draw a line connecting circles
      this.ctx.beginPath();
      // make the line dashed
      this.ctx.setLineDash([10, 10]);
      // find the equation for the line and draw it starting at the edge of the circle, intead of it's center
      // https://math.stackexchange.com/questions/175896/finding-a-point-along-a-line-a-certain-distance-away-from-another-point

      const dd = this.measure_distance(
        [centerX_start, centerY_start],
        [centerX_stop, centerY_stop]
      );
      // the distance along this line is the circle radius
      var dt = radius + 2;
      // the ratio is
      var t = dt / dd;
      // find the starting point
      var X_start = (1 - t) * centerX_start + t * centerX_stop;
      var Y_start = (1 - t) * centerY_start + t * centerY_stop;

      // Now set the end point
      // the distance along this line is the circle radius
      var dt = dd - radius - 2;
      // the ratio is
      var t = dt / dd;
      // find the stopping point
      var X_stop = (1 - t) * centerX_start + t * centerX_stop;
      var Y_stop = (1 - t) * centerY_start + t * centerY_stop;
      this.ctx.moveTo(X_start, Y_start);
      this.ctx.lineTo(X_stop, Y_stop);
      this.ctx.stroke();
    }

    add_arrowHead(
      centerX_start,
      centerY_start,
      centerX_stop,
      centerY_stop,
      radius
    ) {
      // length of the line
      var L = this.measure_distance(
        [centerX_start, centerY_start],
        [centerX_stop, centerY_stop]
      );
      // Need to adjust the end point to be before the end of the line
      // the last 2 is just an adjustment of two pixels away frm the circle's edge
      var dt = L - 2 * radius - 2;
      // the ratio is
      var t = dt / L;
      // find the stopping point
      var X_stop = (1 - t) * centerX_start + t * centerX_stop;
      var Y_stop = (1 - t) * centerY_start + t * centerY_stop;
      //height of the triangle (the arrowhead)
      var h = 15;
      //width of the base of the triangle (the arrowhead)
      var w = 15;

      //first base point coordinates
      var base_x0 = X_stop + ((w / 2) * (Y_stop - centerY_start)) / L;
      var base_y0 = Y_stop + ((w / 2) * (centerX_start - X_stop)) / L;

      //second base point coordinates
      var base_x1 = X_stop - ((w / 2) * (Y_stop - centerY_start)) / L;
      var base_y1 = Y_stop - ((w / 2) * (centerX_start - X_stop)) / L;
      if (X_stop == centerX_start) {
        // avoid division by 0
        var dx = 0;
        dy = h;
        if (Y_stop < centerY_start) {
          //make sure arrow head points the right way
          dy = -h;
        } else {
          dy = h;
        }
      } else {
        if (X_stop < centerX_start) {
          h = -h;
        }
        var slope = (Y_stop - centerY_start) / (X_stop - centerX_start);
        var dx = h / Math.sqrt(1 + Math.pow(slope, 2));
        var dy = dx * slope;
      }
      var head_x = X_stop + dx;
      var head_y = Y_stop + dy;
      // Add arrowheads
      var path = new Path2D();
      path.moveTo(base_x0, base_y0);
      path.lineTo(head_x, head_y);
      path.lineTo(base_x1, base_y1);
      this.ctx.fill(path);
    }

    add_circles(
      centerX,
      centerY,
      radius,
      color = "red",
      AsProp = false,
      WindowX = 200,
      WindowY = 200
    ) {
      // ADD CIRCLE TO THE BACKGROUND
      this.ctx.beginPath();
      console.log(AsProp);
      // make sure the line is solid
      this.ctx.setLineDash([]),
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      this.ctx.stroke();
      this.ctx.fillStyle = color;
      this.ctx.lineWidth = 2;
      this.ctx.fill();
    }

    convert_circles_locations(
      Circles,
      LocationsAsProportions,
      WindowX,
      WindowY
    ) {
      if (LocationsAsProportions) {
        for (var i = 0; i < Circles.length; i++) {
          Circles[i].centerX = Circles[i].centerX * WindowX;
          Circles[i].centerY = Circles[i].centerY * WindowY;
        }
      }
      return Circles;
    }

    add_background_image() {
      return new Promise((resolve, reject) => {
        if (this.params.background_image !== null) {
          this.background_image = new Image();
          this.background_image.src = this.params.background_image;
          this.background_image.onload = () => {
            this.ctx.drawImage(this.background_image, 0, 0);
            resolve(true);
          };
        } else {
          resolve(false);
        }
      });
    }
    start_draw(e) {
      this.is_drawing = true;
      const x = Math.round(
        e.clientX - this.sketchpad.getBoundingClientRect().left
      );
      const y = Math.round(
        e.clientY - this.sketchpad.getBoundingClientRect().top
      );
      this.undo_history = [];
      this.set_redo_btn_state(false);
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.strokeStyle = this.current_stroke_color;
      this.ctx.lineJoin = "round";
      this.ctx.lineWidth = this.params.stroke_width;
      this.stroke = [];
      this.stroke.push({
        x: x,
        y: y,
        color: this.current_stroke_color,
        action: "start",
        t: Math.round(performance.now() - this.start_time),
      });
      console.log("Screen Touch");
      this.sketchpad.releasePointerCapture(e.pointerId);
    }

    measure_distance(point1, point2) {
      var distance =
        Math.pow(point2[1] - point1[1], 2) + Math.pow(point2[0] - point1[0], 2);
      distance = Math.pow(distance, 0.5);
      return distance;
    }

    move_draw(e) {
      if (this.is_drawing) {
        const x = Math.round(
          e.clientX - this.sketchpad.getBoundingClientRect().left
        );
        const y = Math.round(
          e.clientY - this.sketchpad.getBoundingClientRect().top
        );
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.stroke.push({
          x: x,
          y: y,
          action: "move",
          time: performance.now(),
        });

        // Check to see if the cursor is in ANY circle

        //Make sure there are still circles to find
        if (this.CompletedCircle < this.params.Circles.length) {
          // outside all circles
          if (!this.InCircle) {
            // cycle over ALL circles
            for (var i = 0; i < this.params.Circles.length; i++) {
              // check to see if the cursor enters a circle
              var currentDistance = this.measure_distance(
                [this.Circles[i].centerX, this.Circles[i].centerY],
                [x, y]
              );
              if (currentDistance < radius + tolerance) {
                // entered a circle
                this.InsideWhichCircle = i;
                // check to see if this is the correct circle
                if (this.InsideWhichCircle == this.CompletedCircle) {
                  console.log("CORRECT CIRCLE");
                  // record data
                  this.OutData[this.CompletedCircle].Count =
                    this.CompletedCircle;
                  this.OutData[this.CompletedCircle].EnterLocTime =
                    performance.now();
                  this.OutData[this.CompletedCircle].Label =
                    this.Circles[this.CompletedCircle].label;
                  this.OutData[this.CompletedCircle].centerX =
                    this.Circles[this.CompletedCircle].centerX;
                  this.OutData[this.CompletedCircle].centerY =
                    this.Circles[this.CompletedCircle].centerY;
                  if (this.CompletedCircle > 0) {
                    // calculate distance from previous circle
                    var p1 = [
                      this.Circles[this.CompletedCircle - 1].centerX,
                      this.Circles[this.CompletedCircle - 1].centerY,
                    ];
                    var p2 = [
                      this.Circles[this.CompletedCircle].centerX,
                      this.Circles[this.CompletedCircle].centerY,
                    ];
                    var distance = this.measure_distance(p1, p2);
                    // calculate elapsed time since leaving last circle
                    var eTime =
                      this.OutData[this.CompletedCircle].EnterLocTime -
                      this.OutData[this.CompletedCircle - 1].LeaveLocTime;
                    var speed = distance / eTime;
                    // add measures to output data
                    this.OutData[this.CompletedCircle].Distance = distance;
                    this.OutData[this.CompletedCircle].eTime = eTime;
                    this.OutData[this.CompletedCircle].speed = speed;
                  } else {
                    this.OutData[this.CompletedCircle].Distance = -99;
                    this.OutData[this.CompletedCircle].eTime = -99;
                    this.OutData[this.CompletedCircle].speed = -99;
                  }

                  if (GiveFeedback) {
                    this.add_circles(
                      this.Circles[this.CompletedCircle].centerX,
                      this.Circles[this.CompletedCircle].centerY,
                      this.Circles[this.CompletedCircle].radius,
                      CorrectCircleColor
                    );
                    this.add_text(
                      this.Circles[this.CompletedCircle].centerX,
                      this.Circles[this.CompletedCircle].centerY,
                      this.Circles[this.CompletedCircle].label
                    );
                  }
                }
                // register an error
                else {
                  if (!this.params.change_circle_color_only_when_correct) {
                    console.log(this);
                    console.log("WRONG CIRCLE ONE");
                    this.add_circles(
                      this.Circles[this.InsideWhichCircle].centerX,
                      this.Circles[this.InsideWhichCircle].centerY,
                      this.Circles[this.InsideWhichCircle].radius,
                      CorrectCircleColor
                    );
                    this.add_text(
                      this.Circles[this.InsideWhichCircle].centerX,
                      this.Circles[this.InsideWhichCircle].centerY,
                      this.Circles[this.InsideWhichCircle].label
                    );
                  }
                  console.log(this);
                  console.log("WRONG CIRCLE TWO");
                  this.ErrorCount++;
                }
                this.InCircle = true;
              }
            }
          }
          // If inside a circle, check when the cursor leaves the circle
          else {
            // check to see if the cursor leaves a circle
            currentDistance = this.measure_distance(
              [
                this.Circles[this.InsideWhichCircle].centerX,
                this.Circles[this.InsideWhichCircle].centerY,
              ],
              [x, y]
            );
            if (currentDistance > radius + tolerance) {
              // left a circle
              this.InCircle = false;
              // left the Correct circle
              if (this.InsideWhichCircle == this.CompletedCircle) {
                this.OutData[this.CompletedCircle].LeaveLocTime =
                  performance.now();
                this.OutData[this.CompletedCircle].DwellTime =
                  this.OutData[this.CompletedCircle].LeaveLocTime -
                  this.OutData[this.CompletedCircle].EnterLocTime;

                this.CompletedCircle++;
              }
            }
          }
        }

        /*
                // Is cursor in the expected circle Circle?
                if ( this.CompletedCircle < Circles .length) {
                  // if inside a circle
                  if (this.measure_distance([this.Circles[this.CompletedCircle].centerX, this.Circles[this.CompletedCircle].centerY],[x,y]) < radius + tolerance) 
                  {
                    // If the flag said cursor was outside circle
                    if ( ! this.InCircle ) {
                      console.log("Entering a circle");
                      console.log(this.InCircle)
                      console.log(performance.now());
                      this.OutData[this.CompletedCircle].Count = this.CompletedCircle;
                      this.OutData[this.CompletedCircle].EnterTime = performance.now();
                      this.OutData[this.CompletedCircle].Label = this.Circles[this.CompletedCircle].label;
                      this.InCircle = true;
                    }
                    if ( GiveFeedback ) {
                        this.add_circles(this.Circles[this.CompletedCircle].centerX, this.Circles[this.CompletedCircle].centerY, this.Circles[this.CompletedCircle].radius, CorrectCircleColor); 
                        this.add_text(this.Circles[this.CompletedCircle].centerX, this.Circles[this.CompletedCircle].centerY, this.Circles[this.CompletedCircle].label);
                      }
                      
                  }
                  // outside a circle
                  else {
                      if ( this.InCircle ) {
                        console.log("Left the Circle");
                        this.OutData[this.CompletedCircle].LeaveTime = performance.now();
                        console.log(performance.now())
                        this.InCircle = false;
                        this.CompletedCircle++;
                      }
                    }
                }
                
      */
        /*  if (x > this.params.JASON_Loc) {
                  console.log('TRUE')
                }
                else {
                  console.log("FALSE")
                }
                */
      }
    }
    end_draw(e) {
      if (this.is_drawing) {
        this.stroke.push({
          action: "end",
          t: Math.round(performance.now() - this.start_time),
        });
        this.strokes.push(this.stroke);
        this.set_undo_btn_state(true);
        this.set_clear_btn_state(true);
      }
      this.is_drawing = false;
      console.log(this);
    }
    render_drawing() {
      this.ctx.clearRect(0, 0, this.sketchpad.width, this.sketchpad.height);
      this.add_background_color();
      if (this.background_image) {
        this.ctx.drawImage(this.background_image, 0, 0);
      }
      for (const stroke of this.strokes) {
        for (const m of stroke) {
          if (m.action == "start") {
            this.ctx.beginPath();
            this.ctx.moveTo(m.x, m.y);
            this.ctx.strokeStyle = m.color;
            this.ctx.lineJoin = "round";
            this.ctx.lineWidth = this.params.stroke_width;
          }
          if (m.action == "move") {
            this.ctx.lineTo(m.x, m.y);
            this.ctx.stroke();
          }
        }
      }
    }
    undo() {
      this.undo_history.push(this.strokes.pop());
      this.set_redo_btn_state(true);
      if (this.strokes.length == 0) {
        this.set_undo_btn_state(false);
      }
      this.render_drawing();
    }
    redo() {
      this.strokes.push(this.undo_history.pop());
      this.set_undo_btn_state(true);
      if (this.undo_history.length == 0) {
        this.set_redo_btn_state(false);
      }
      this.render_drawing();
    }
    clear() {
      this.strokes = [];
      this.undo_history = [];
      this.render_drawing();
      this.set_redo_btn_state(false);
      this.set_undo_btn_state(false);
      this.set_clear_btn_state(false);
    }
    set_undo_btn_state(enabled) {
      if (this.params.show_undo_button) {
        this.display.querySelector("#sketchpad-undo").disabled = !enabled;
      }
    }
    set_redo_btn_state(enabled) {
      if (this.params.show_undo_button && this.params.show_redo_button) {
        this.display.querySelector("#sketchpad-redo").disabled = !enabled;
      }
    }
    set_clear_btn_state(enabled) {
      if (this.params.show_clear_button) {
        this.display.querySelector("#sketchpad-clear").disabled = !enabled;
      }
    }
    capture_frame() {
      //capture a frame
      console.log("Capturing Frame");
      this.capture_frame_interval = setInterval(() => {
        this.enc.addFrame(this.ctx);
      }, 500);
      //this.capture_frame_interval = setTimeout(this.enc.addFrame(this.ctx), 500)
    }
    set_trial_duration_timer() {
      if (this.params.trial_duration !== null) {
        this.jsPsych.pluginAPI.setTimeout(() => {
          this.end_trial();
        }, this.params.trial_duration);
        if (this.params.show_countdown_trial_duration) {
          this.timer_interval = setInterval(() => {
            const remaining =
              this.params.trial_duration -
              (performance.now() - this.start_time);
            let minutes = Math.floor(remaining / 1000 / 60);
            let seconds = Math.ceil((remaining - minutes * 1000 * 60) / 1000);
            if (seconds == 60) {
              seconds = 0;
              minutes++;
            }
            const minutes_str = minutes.toString();
            const seconds_str = seconds.toString().padStart(2, "0");
            const timer_span = this.display.querySelector("#sketchpad-timer");
            if (timer_span) {
              timer_span.innerHTML = `${minutes_str}:${seconds_str}`;
            }
            if (remaining <= 0) {
              if (timer_span) {
                timer_span.innerHTML = `0:00`;
              }
              clearInterval(this.timer_interval);
            }
          }, 250);
        }
      }
    }
    after_key_response(info) {
      this.end_trial(info.key);
    }
    end_trial(response = null) {
      console.log("ENDING TRIAL");
      if (this.params.GIFRecord) {
        this.enc.finish();
        clearInterval(this.capture_frame_interval);
        var binary_gif = encoder.stream().getData(); //notice this is different from the as3gif package!
        var data_url = "data:image/gif;base64," + encode64(binary_gif);
      }

      this.jsPsych.pluginAPI.clearAllTimeouts();
      this.jsPsych.pluginAPI.cancelAllKeyboardResponses();
      clearInterval(this.timer_interval);
      const trial_data = {};
      trial_data.gif = data_url;
      trial_data.rt = Math.round(performance.now() - this.start_time);
      trial_data.ErrorCount = this.ErrorCount;
      trial_data.OutData = this.OutData;
      trial_data.response = response;
      if (this.params.save_final_image) {
        trial_data.png = this.sketchpad.toDataURL();
      }
      if (this.params.save_strokes) {
        trial_data.strokes = this.strokes;
      }
      this.display.innerHTML = "";
      document.querySelector("#sketchpad-styles").remove();
      this.jsPsych.finishTrial(trial_data);
      this.trial_finished_handler();
    }
  }
  SketchpadPlugin.info = info;

  return SketchpadPlugin;
})(jsPsychModule);
