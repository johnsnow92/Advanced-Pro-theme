{% if item.card_icon.src %}
{% set sizeAttrs = 'width="{{ item.card_icon.width|escape_attr }}" height="{{ item.card_icon.height|escape_attr }}"' %}
{% if item.card_icon.size_type == 'auto' %}
{% set sizeAttrs = 'width="{{ item.card_icon.width|escape_attr }}" height="{{ item.card_icon.height|escape_attr }}" style="max-width: 100%; height: auto;"' %}
{% elif item.card_icon.size_type == 'auto_custom_max' %}
{% set sizeAttrs = 'width="{{ item.card_icon.max_width|escape_attr }}" height="{{ item.card_icon.max_height|escape_attr }}" style="max-width: 100%; height: auto;"' %}
{% endif %}
