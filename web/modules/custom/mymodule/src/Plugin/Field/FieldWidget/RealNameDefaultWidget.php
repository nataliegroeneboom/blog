<?php
namespace Drupal\mymodule\Plugin\Field\FieldWidget;

use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * Plugin implementation of the 'realname_default' widget
 *
 * @FieldWidget (
 *     id = "realname_default",
 *     label = @Translation("Real Name"),
 *     field_types = {
 *         "realname",
 *     }
 *  )
 */


class RealNameDefaultWidget extends WidgetBase {

    /**
     * {@inheritdoc}
     *
     */

    public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state){
        $element['first_name'] = [
          '#type' => 'textfield',
          '#title' => t('First Name'),
          '#default_value' => '',
          '#size' => 25,
        ];
        $element['last_name'] = [
            '#type' => 'textfield',
            '#title' => t('Last Name'),
            '#default_value' => '',
            '#size' => 25,

        ];
        return $element;


    }
}