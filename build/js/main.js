$(document).ready(function() {

  var $carImg = $('#imgHolder img');
  var modelPrice = 0;
  var modelPriceHolder = $('#modelPrice');
  var modelSpecs = '';
  var modelSpecsHolder = $('#modelSpecs');

  calculatePrice();
  complileSpecs();

  $('#colorsSelector .colorItem').on('click', function() {

     var imgPath = $(this).attr('data-img-path');

      $carImg.fadeOut(300, function() {
        $carImg.attr('src', imgPath).fadeIn(300);
    });
  });

  function calculatePrice() {

    var modelPriceEngine = parseInt( $('input[name=engine]:checked','#autoForm').val() );
    var modelPriceTransmission = parseInt( $('input[name=transmission]:checked','#autoForm').val() );
    var modelPricePackage = parseInt( $('input[name=package]:checked','#autoForm').val() );

    modelPrice = modelPriceEngine + modelPriceTransmission + modelPricePackage;
    modelPriceHolder.text( modelPrice + ' рублей');
  };

  $('#autoForm input').on('change', function(){

    calculatePrice();
    complileSpecs();
  });

  function complileSpecs() {

    modelSpecs = $('input[name=engine]:checked + label','#autoForm').text();
    modelSpecs = modelSpecs + ', ' + $('input[name=transmission]:checked + label','#autoForm').text();
    modelSpecs = modelSpecs + ', ' + $('input[name=package]:checked + label','#autoForm').text() + '.';

    modelSpecsHolder.text(modelSpecs);
  };
});


