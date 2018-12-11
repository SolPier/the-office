import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Component | Presentational | help-instructions', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<HelpInstructions />`);
    assert.equal(this.element.querySelector('.help-instructions_line').textContent.trim(), 'Comment mettre les sous titres sur la vidéo ?');
  });
});
