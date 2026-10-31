// form-validation.js — All regex patterns defined internally in JS

(function() {
  'use strict';

  // ========== REGEX PATTERNS LIBRARY (all defined in JS) ==========
  const REGEX_PATTERNS = {
    email: {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'Please enter a valid email address'
    },
    phone: {
      pattern: /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
      message: 'Please enter a valid US phone number (e.g., 555-123-4567)'
    },
    phoneIntl: {
      pattern: /^\+?[1-9]\d{1,14}$/,
      message: 'Please enter a valid international phone number'
    },
    username: {
      pattern: /^[a-zA-Z0-9_]{3,20}$/,
      message: 'Username must be 3-20 characters (letters, numbers, underscores only)'
    },
    password: {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message: 'Password must be 8+ chars with uppercase, lowercase, number, and special character'
    },
    passwordMedium: {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
      message: 'Password must be 6+ chars with uppercase, lowercase, and number'
    },
    url: {
      pattern: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
      message: 'Please enter a valid URL (e.g., https://example.com)'
    },
    ipv4: {
      pattern: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
      message: 'Please enter a valid IPv4 address (e.g., 192.168.1.1)'
    },
    hexcolor: {
      pattern: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      message: 'Please enter a valid hex color (e.g., #FF5733 or #F53)'
    },
    creditcard: {
      pattern: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12})$/,
      message: 'Please enter a valid credit card number'
    },
    alphanumeric: {
      pattern: /^[a-zA-Z0-9]+$/,
      message: 'Only letters and numbers allowed'
    },
    alpha: {
      pattern: /^[a-zA-Z\s]+$/,
      message: 'Only letters and spaces allowed'
    },
    alpha_letter: {
      pattern: /^[a-zA-Z]+$/,
      message: 'Only letters allowed'
    },
    alpha_dash: {
      pattern: /^[a-zA-Z0-9\s]+$/,
      message: 'Only letters, numbers and spaces allowed'
    },
    numeric: {
      pattern: /^[0-9]+$/,
      message: 'Only numbers allowed'
    },
    decimal: {
      pattern: /^[0-9]*\.?[0-9]+$/,
      message: 'Please enter a valid decimal number'
    },
    slug: {
      pattern: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      message: 'Only lowercase letters, numbers, and hyphens (e.g., my-page-slug)'
    },
    date: {
      pattern: /^\d{4}-\d{2}-\d{2}$/,
      message: 'Please enter a valid date (YYYY-MM-DD)'
    },
    time: {
      pattern: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
      message: 'Please enter a valid time (HH:MM)'
    },
    zipcode: {
      pattern: /^\d{5}(-\d{4})?$/,
      message: 'Please enter a valid US ZIP code (e.g., 12345 or 12345-6789)'
    },
    ssn: {
      pattern: /^\d{3}-\d{2}-\d{4}$/,
      message: 'Please enter a valid SSN (e.g., 123-45-6789)'
    }
  };

// ========== VALIDATION RULES CONFIG ==========
// Maps data-validate-type to validation config
// ========== VALIDATION RULES CONFIG ==========

const VALIDATION_RULES = {
    // Text inputs
    email: { type: 'text', required: true, regex: 'email' },
    phone: { type: 'text', required: true, regex: 'phone' },
    phoneOptional: { type: 'text', required: false, regex: 'phone' },
    username: { type: 'text', required: true, regex: 'username' },
    password: { type: 'text', required: true, regex: 'password' },
    passwordMedium: { type: 'text', required: true, regex: 'passwordMedium' },
    url: { type: 'text', required: true, regex: 'url' },
    urlOptional: { type: 'text', required: false, regex: 'url' },
    ipv4: { type: 'text', required: true, regex: 'ipv4' },
    hexcolor: { type: 'text', required: true, regex: 'hexcolor' },
    creditcard: { type: 'text', required: true, regex: 'creditcard' },
    name: { type: 'text', required: true, regex: 'alpha', minLength: 2, maxLength: 50 },
    fullname: { type: 'text', required: true, regex: 'alpha', minLength: 2, maxLength: 100 },
    alpha_dash: { type: 'text', required: true, regex: 'alpha_dash'},
    alphanumeric: { type: 'text', required: true, regex: 'alphanumeric' },
    numeric: { type: 'text', required: true, regex: 'numeric' },
    decimal: { type: 'text', required: true, regex: 'decimal' },
    slug: { type: 'text', required: true, regex: 'slug' },
    date: { type: 'text', required: true, regex: 'date' },
    time: { type: 'text', required: true, regex: 'time' },
    zipcode: { type: 'text', required: true, regex: 'zipcode' },
    zipcodeOptional: { type: 'text', required: false, regex: 'zipcode' },
    ssn: { type: 'text', required: true, regex: 'ssn' },
    ticktitle: { type: 'text', required: true, regex: 'alpha', minLength: 5, maxLength: 100 },
    ticket_message: { type: 'text', required: true, regex: 'alpha', minLength: 5, maxLength: 500 },
    ticket_location: { type: 'text', required: true, regex: 'alpha', minLength: 5, maxLength: 100 },
    community: { type: 'text', required: true, regex: 'alpha_letter', minLength: 1, maxLength: 20 },
    
    // Textarea / text with length only
    bio: { type: 'text', required: true, minLength: 20, maxLength: 500 },
    message: { type: 'text', required: true, minLength: 10, maxLength: 1000 },
    subject: { type: 'text', required: true, minLength: 3, maxLength: 100 },
    otp: { type: 'text', required: true, regex: 'numeric', minLength: 4, maxLength: 6 },
    search: { type: 'text', required: false, minLength: 2, maxLength: 100 },
    
    // Select dropdowns
    country: { type: 'select', required: true },
    state: { type: 'select', required: true },
    city: { type: 'select', required: true },
    category: { type: 'select', required: true },
    role: { type: 'select', required: true },
    priority: { type: 'select', required: true },
    assign_to: { type: 'select', required: true },
    assign_agent: { type: 'select', required: false },
    tickstatus: { type: 'select', required: false },
    tickpriority: { type: 'select', required: false },
    gender: { type: 'select', required: true },
    
    
    // Single checkboxes
    terms: { type: 'checkbox', required: true },
    agree: { type: 'checkbox', required: true },
    newsletter: { type: 'checkbox', required: false },
    
    // File uploads
    file: { type: 'file', required: true },
    image: { type: 'file', required: true },
    document: { type: 'file', required: true },
    avatar: { type: 'file', required: true },
    resume: { type: 'file', required: true },
    attachment: { type: 'file', required: false }
};

  class FormValidator {
    constructor(formSelector, options = {}) {
      this.forms = new Map();
      this.options = {
        validateOnInput: true,
        validateOnBlur: true,
        validateOnChange: true,
        scrollToFirstError: true,
        ...options
      };

      this.init(formSelector);
    }

    init(formSelector) {
      let formElements;

      if (typeof formSelector === 'string') {
        formElements = document.querySelectorAll(formSelector);
      } else if (formSelector instanceof HTMLElement) {
        formElements = [formSelector];
      } else if (formSelector instanceof NodeList || Array.isArray(formSelector)) {
        formElements = formSelector;
      } else {
        formElements = document.querySelectorAll('form[data-validate-form]');
      }

      if (!formElements.length) {
        console.error('FormValidator: No forms found');
        return;
      }

      formElements.forEach((form, index) => {
        const formId = form.id || form.dataset.formId || `form_${index}_${Date.now()}`;
        form.dataset.formValidatorId = formId;
        form.setAttribute('novalidate', 'novalidate');

        this.forms.set(formId, {
          element: form,
          fields: new Map(),
          touched: false,
          options: { ...this.options }
        });

        this.scanFields(formId);
        this.attachEvents(formId);
      });

      console.log(`FormValidator: Initialized ${this.forms.size} form(s)`);
    }

    scanFields(formId) {
      const formData = this.forms.get(formId);
      const form = formData.element;

      // All inputs with data-validate-type
      form.querySelectorAll('[data-validate-type]').forEach(el => {
        const validateType = el.dataset.validateType;
        const rules = VALIDATION_RULES[validateType];

        if (!rules) {
          console.warn(`Unknown validation type: "${validateType}" on`, el);
          return;
        }

        // Store rules on element for quick access
        el._validationRules = rules;
        el._validationType = validateType;

        this.registerField(formId, el, rules.type);
      });

      // Select dropdowns with data-validate-type
      form.querySelectorAll('select[data-validate-type]').forEach(el => {
        const validateType = el.dataset.validateType;
        const rules = VALIDATION_RULES[validateType] || { type: 'select', required: true };

        el._validationRules = rules;
        el._validationType = validateType;

        this.registerField(formId, el, 'select');
      });

      // Radio groups
      const radioGroups = new Set();
      form.querySelectorAll('input[type="radio"][data-validate-group]').forEach(el => {
        radioGroups.add(el.dataset.validateGroup || el.name);
      });
      radioGroups.forEach(groupName => {
        this.registerGroup(formId, groupName, 'radio');
      });

      // Checkbox groups
      const checkboxGroups = new Set();
      form.querySelectorAll('input[type="checkbox"][data-validate-group]').forEach(el => {
        checkboxGroups.add(el.dataset.validateGroup);
      });
      checkboxGroups.forEach(groupName => {
        this.registerGroup(formId, groupName, 'checkbox');
      });

      // Single checkbox
      form.querySelectorAll('input[type="checkbox"][data-validate-type]').forEach(el => {
        const validateType = el.dataset.validateType;
        const rules = VALIDATION_RULES[validateType] || { type: 'checkbox', required: true };

        el._validationRules = rules;
        el._validationType = validateType;

        this.registerField(formId, el, 'checkbox');
      });

      // File
      form.querySelectorAll('input[type="file"][data-validate-type]').forEach(el => {
        const validateType = el.dataset.validateType;
        const rules = VALIDATION_RULES[validateType] || { type: 'file', required: true };

        el._validationRules = rules;
        el._validationType = validateType;

        this.registerField(formId, el, 'file');
      });
    }

    registerField(formId, element, type) {
      const formData = this.forms.get(formId);
      const id = element.id || element.name || `${formId}_field_${Math.random().toString(36).substr(2, 8)}`;
      
      element._validatorFormId = formId;
      
      formData.fields.set(id, {
        element: element,
        type: type,
        touched: false,
        id: id,
        formId: formId
      });
    }

    registerGroup(formId, groupName, type) {
      const formData = this.forms.get(formId);
      formData.fields.set(`group:${groupName}`, {
        groupName: groupName,
        type: type,
        touched: false,
        formId: formId
      });
    }

    attachEvents(formId) {
      const formData = this.forms.get(formId);
      const form = formData.element;

      formData.fields.forEach((field, key) => {
        if (field.element) {
          const el = field.element;

          if (formData.options.validateOnInput && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
            el.addEventListener('input', () => {
              field.touched = true;
              this.validateField(formId, key);
            });
          }

          if (formData.options.validateOnBlur) {
            el.addEventListener('blur', () => {
              field.touched = true;
              this.validateField(formId, key);
            });
          }

          if (formData.options.validateOnChange) {
            el.addEventListener('change', () => {
              field.touched = true;
              this.validateField(formId, key);
            });
          }
        } else if (field.groupName) {
          const selector = field.type === 'radio'
            ? `input[type="radio"][name="${field.groupName}"]`
            : `input[type="checkbox"][data-validate-group="${field.groupName}"]`;

          form.querySelectorAll(selector).forEach(el => {
            el.addEventListener('change', () => {
              field.touched = true;
              this.validateField(formId, key);
            });
          });
        }
      });

      form.addEventListener('submit', (e) => this.handleSubmit(e, formId));
    }

    validateField(formId, fieldKey) {
      const formData = this.forms.get(formId);
      const field = formData.fields.get(fieldKey);
      if (!field) return { valid: false, errors: ['Field not found'] };

      let result;

      if (field.type === 'text') {
        result = this.validateText(field.element);
      } else if (field.type === 'select') {
        result = this.validateSelect(field.element);
      } else if (field.type === 'radio') {
        result = this.validateRadioGroup(formId, field.groupName);
      } else if (field.type === 'checkbox') {
        if (field.element) {
          result = this.validateSingleCheckbox(field.element);
        } else {
          result = this.validateCheckboxGroup(formId, field.groupName);
        }
      } else if (field.type === 'file') {
        result = this.validateFile(field.element);
      } else {
        result = { valid: true, errors: [] };
      }

      this.updateUI(formId, field, result);
      return result;
    }

    validateText(input) {
      const value = input.value.trim();
      const rules = input._validationRules || {};
      const required = rules.required !== false; // default true unless explicitly false
      const regexKey = rules.regex;
      const minLen = rules.minLength || null;
      const maxLen = rules.maxLength || null;

      // 1. Empty check
      if (!value) {
        if (required) {
          return { 
            valid: false, 
            errors: [input.dataset.msgRequired || 'This field is required'] 
          };
        }
        return { valid: true, errors: [] };
      }

      // 2. Min length
      if (minLen && value.length < minLen) {
        return { 
          valid: false, 
          errors: [`Minimum ${minLen} characters required (current: ${value.length})`] 
        };
      }

      // 3. Max length
      if (maxLen && value.length > maxLen) {
        return { 
          valid: false, 
          errors: [`Maximum ${maxLen} characters allowed (current: ${value.length})`] 
        };
      }

      // 4. Regex validation (from JS library, NOT from HTML)
      if (regexKey && REGEX_PATTERNS[regexKey]) {
        const regexConfig = REGEX_PATTERNS[regexKey];
        if (!regexConfig.pattern.test(value)) {
          return { 
            valid: false, 
            errors: [input.dataset.msgRegex || regexConfig.message] 
          };
        }
      }

      return { valid: true, errors: [] };
    }

    validateSelect(select) {
      const value = select.value;
      const rules = select._validationRules || {};
      const required = rules.required !== false;
      const emptyValue = select.dataset.emptyValue || 'default';

      if (!value || value === emptyValue || value === '') {
        if (required) {
          return { 
            valid: false, 
            errors: [select.dataset.msgRequired || 'Please make a selection'] 
          };
        }
        return { valid: true, errors: [] };
      }

      return { valid: true, errors: [] };
    }

    validateRadioGroup(formId, groupName) {
      const form = this.forms.get(formId).element;
      const firstEl = form.querySelector(`input[type="radio"][name="${groupName}"]`);
      const required = firstEl?.dataset.required === 'true';
      const checked = form.querySelector(`input[type="radio"][name="${groupName}"]:checked`);

      if (!checked) {
        if (required) {
          return { 
            valid: false, 
            errors: [firstEl?.dataset.msgRequired || 'Please select an option'] 
          };
        }
        return { valid: true, errors: [] };
      }

      return { valid: true, errors: [] };
    }

    validateCheckboxGroup(formId, groupName) {
      const form = this.forms.get(formId).element;
      const firstEl = form.querySelector(`input[type="checkbox"][data-validate-group="${groupName}"]`);
      const required = firstEl?.dataset.required === 'true';
      const min = firstEl?.dataset.min ? parseInt(firstEl.dataset.min) : null;
      const checked = form.querySelectorAll(`input[type="checkbox"][data-validate-group="${groupName}"]:checked`);
      const count = checked.length;

      if (min && count < min) {
        return { valid: false, errors: [`Please select at least ${min} option(s)`] };
      }

      if (required && count === 0) {
        return { 
          valid: false, 
          errors: [firstEl?.dataset.msgRequired || 'Please select at least one option'] 
        };
      }

      return { valid: true, errors: [] };
    }

    validateSingleCheckbox(checkbox) {
      const rules = checkbox._validationRules || {};
      const required = rules.required !== false;

      if (!checkbox.checked) {
        if (required) {
          return { 
            valid: false, 
            errors: [checkbox.dataset.msgRequired || 'You must agree to continue'] 
          };
        }
        return { valid: true, errors: [] };
      }

      return { valid: true, errors: [] };
    }

    validateFile(input) {
      const file = input.files[0];
      const rules = input._validationRules || {};
      const required = rules.required !== false;
      const accept = input.dataset.accept || input.accept;
      const maxSize = input.dataset.maxSize;

      if (!file) {
        if (required) {
          return { 
            valid: false, 
            errors: [input.dataset.msgRequired || 'Please upload a file'] 
          };
        }
        return { valid: true, errors: [] };
      }

      if (accept) {
        const allowed = accept.split(',').map(t => t.trim());
        const validType = allowed.some(type => {
          return file.type === type || 
            file.name.toLowerCase().endsWith(type.replace('image/', '.'));
        });
        if (!validType) {
          return { valid: false, errors: [`Invalid file type. Allowed: ${accept}`] };
        }
      }

      if (maxSize) {
        const maxBytes = this.parseSize(maxSize);
        if (file.size > maxBytes) {
          return { valid: false, errors: [`File too large. Max: ${maxSize}`] };
        }
      }

      return { valid: true, errors: [] };
    }

    updateUI(formId, field, result) {
      const form = this.forms.get(formId).element;
      const isGroup = field.groupName !== undefined;
      
      let wrapper, feedback;
      
      if (isGroup) {
        wrapper = form.querySelector(`[data-validate-group-wrapper="${field.groupName}"]`);
        feedback = form.querySelector(`[data-feedback="${field.groupName}"]`);
      } else {
        wrapper = field.element.closest('.field-wrapper') || field.element.parentElement;
        feedback = form.querySelector(`[data-feedback="${field.element.id || field.element.name}"]`);
      }

      if (field.element) {
        field.element.style.borderColor = '';
        field.element.style.backgroundColor = '';
      }
      if (wrapper) {
        wrapper.classList.remove('valid', 'invalid');
        wrapper.querySelectorAll('input, select, textarea').forEach(el => {
          if (el.type !== 'radio' && el.type !== 'checkbox') {
            el.style.borderColor = '';
            el.style.backgroundColor = '';
          }
        });
      }

      if (!result.valid) {
        if (field.element) {
          field.element.style.borderColor = '#dc3545';
          field.element.style.backgroundColor = '#fff5f5';
        }
        if (wrapper) {
          wrapper.classList.add('invalid');
          wrapper.querySelectorAll('input:not([type="radio"]):not([type="checkbox"]), select, textarea').forEach(el => {
            el.style.borderColor = '#dc3545';
            el.style.backgroundColor = '#fff5f5';
          });
        }
        if (feedback) {
          feedback.innerHTML = result.errors.map(e => `✗ ${e}`).join('<br>');
          feedback.style.color = '#dc3545';
        }
      } else {
        const hasValue = isGroup
          ? form.querySelector(`[name="${field.groupName}"]:checked, [data-validate-group="${field.groupName}"]:checked`) !== null
          : (field.element?.value || field.element?.checked || field.element?.files?.length > 0);

        if (hasValue || field.touched) {
          if (field.element && field.element.type !== 'radio' && field.element.type !== 'checkbox') {
            field.element.style.borderColor = '#28a745';
            field.element.style.backgroundColor = '#f0fff4';
          }
          if (wrapper) {
            wrapper.classList.add('valid');
            wrapper.querySelectorAll('input:not([type="radio"]):not([type="checkbox"]), select, textarea').forEach(el => {
              el.style.borderColor = '#28a745';
              el.style.backgroundColor = '#f0fff4';
            });
          }
          if (feedback) {
            feedback.innerHTML = '✓ Looks good!';
            feedback.style.color = '#28a745';
          }
        } else {
          if (feedback) {
            feedback.innerHTML = '';
            feedback.style.color = '';
          }
        }
      }
    }

    handleSubmit(e, formId) {
      e.preventDefault();
      const formData = this.forms.get(formId);
      const form = formData.element;
      
      let isValid = true;
      let firstError = null;

      formData.fields.forEach((field, key) => {
        field.touched = true;
        const result = this.validateField(formId, key);
        if (!result.valid) {
          isValid = false;
          if (!firstError) {
            firstError = field.element || form.querySelector(`[name="${field.groupName}"]`);
          }
        }
      });

      if (isValid) {
        const data = new FormData(form);
        const plainData = Object.fromEntries(data.entries());
        
        form.dispatchEvent(new CustomEvent('form:valid', { 
          detail: { data: plainData, formData: data, formId: formId, form: form },
          bubbles: true 
        }));
      } else {
        if (formData.options.scrollToFirstError && firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstError.focus?.();
        }
        form.dispatchEvent(new CustomEvent('form:invalid', { 
          detail: { formId: formId, form: form },
          bubbles: true 
        }));
      }

      return isValid;
    }

    parseSize(sizeStr) {
      const match = String(sizeStr).toLowerCase().match(/^(\d+(?:\.\d+)?)\s*(b|kb|mb|gb)?$/);
      if (!match) return parseInt(sizeStr) || 0;
      const units = { b: 1, kb: 1024, mb: 1048576, gb: 1073741824 };
      return parseFloat(match[1]) * (units[match[2]] || 1);
    }

    reset(formId) {
      const formData = this.forms.get(formId);
      if (!formData) return;
      
      formData.element.reset();
      formData.fields.forEach((field, key) => {
        field.touched = false;
        this.updateUI(formId, field, { valid: true, errors: [] });
      });
    }

    validateAll(formId) {
      const formData = this.forms.get(formId);
      if (!formData) return false;
      
      let isValid = true;
      formData.fields.forEach((field, key) => {
        field.touched = true;
        const validateField = this.validateField(formId, key);
        if (!validateField.valid) isValid = false;
      });
      return isValid;
    }

    getForm(formId) {
      return this.forms.get(formId);
    }

    getAllForms() {
      return this.forms;
    }
  }

  window.FormValidator = FormValidator;

})();